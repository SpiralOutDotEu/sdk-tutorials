---
title: "Compose Complex Transactions"
order: 3
description: Send multiple tokens and messages through CosmJS
tag: deep-dive
---

# Compose Complex Transactions - Send Multiple Messages

<HighlightBox type="synopsis">
    
In Cosmos, a transaction can encapsulate multiple messages.
    
In this section:
    
* Send multiple tokens in a single transaction
* Sign and Broadcast
* Assemble multiple messages
    
</HighlightBox>

## Send multiple tokens using `sendTokens`

In the [previous exercise](./first-steps.md), you had Alice send tokens back to the faucet. To refresh your memory, this is what the `sendTokens` function takes as input:

```typescript [https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L217-L223]
public async sendTokens(
    senderAddress: string,
    recipientAddress: string,
    amount: readonly Coin[],
    fee: StdFee | "auto" | number,
    memo = "",
): Promise<DeliverTxResponse>;
```

[`Coin`](https://github.com/confio/cosmjs-types/blob/a14662d/src/cosmos/base/v1beta1/coin.ts#L13-L16) allows Alice to send not just `stake` but also any number of other coins as long as she owns them. So she can:

<CodeGroup>
<CodeGroupItem title="Send one token type" active>

```typescript
const result = await signingClient.sendTokens(
    alice,
    faucet,
    [
        { denom: "uatom", amount: "100000" },
    ],
    {
        amount: [{ denom: "uatom", amount: "500" }],
        gas: "200000",
    },
)
```

</CodeGroupItem>
<CodeGroupItem title="Send two token types">

```typescript
const result = await signingClient.sendTokens(
    alice,
    faucet,
    [
        { denom: "uatom", amount: "100000" },
        { denom: "token", amount: "12" },
    ],
    {
        amount: [{ denom: "uatom", amount: "500" }],
        gas: "200000",
    },
)
```

</CodeGroupItem>
</CodeGroup>

However, there are limitations. First, Alice **can only target a single recipient per transaction**, `faucet` in the previous examples. If she wants to send tokens to multiple recipients, then she needs to create as many transactions as there are recipients. Multiple transactions cost slightly more than packing transfers into the array because of transaction overhead. Additionally, in some cases it can be considered a bad user experience to make users sign multiple transactions.

The second limitation is that **separate transfers are not atomic**. It is possible that Alice wants to send tokens to two recipients and it is important that either they both receive them or neither of them receive anything.

Fortunately, there is a way to atomically send tokens to multiple recipients.

## Introducing `signAndBroadcast`

`SigningStargateClient` has the `signAndBroadcast` function:

```typescript [https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L317-L322]
public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee | "auto" | number,
    memo = "",
): Promise<DeliverTxResponse>;
```

The basic components of a transaction are the `signerAddress`, the `messages` that it contains, as well as the `fee` and an optional `memo`. As such, [Cosmos transactions](../2-main-concepts/transactions.md) can indeed be composed of multiple [messages](../2-main-concepts/messages.md).

## Token transfer messages

In order to use `signAndBroadcast` to send tokens, you need to figure out what messages go into the `messages: readonly EncodeObject[]`. Examine the `sendTokens` function body:

```typescript [https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L224-L232]
const sendMsg: MsgSendEncodeObject = {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend",
    value: {
      fromAddress: senderAddress,
      toAddress: recipientAddress,
      amount: [...amount],
    },
  };
return this.signAndBroadcast(senderAddress, [sendMsg], fee, memo);
```

Therefore, when sending back to the faucet, instead of calling:

```typescript
const result = await signingClient.sendTokens(
    alice,
    faucet,
    [{ denom: "uatom", amount: "100000" }],
    {
        amount: [{ denom: "uatom", amount: "500" }],
        gas: "200000",
    },
)
```

Alice can instead call:

```typescript
const result = await signingClient.signAndBroadcast(
    // the signerAddress
    alice,
    // the message(s)
    [
        {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
                fromAddress: alice,
                toAddress: faucet,
                amount: [
                    { denom: "uatom", amount: "100000" },
                ],
            },
          },
    ],
    // the fee
    {
        amount: [{ denom: "uatom", amount: "500" }],
        gas: "200000",
    },
)
```

You can confirm this by making the change in your `experiment.ts` from the previous section, and running it again.

<HighlightBox type="tip">

In fact, building a transaction in this way is recommended. `SigningStargateClient` offers you convenience methods such as `sendTokens` for simple use cases only.

</HighlightBox>

## What is this long string?

As a reminder from the previous tutorial, the `typeUrl: "/cosmos.bank.v1beta1.MsgSend"` string comes from the [Protobuf](../2-main-concepts/protobuf.md) definitions and is a mixture of:

1. The `package` where `MsgSend` is initially declared:

    ```protobuf [https://github.com/cosmos/cosmos-sdk/blob/3a1027c/proto/cosmos/bank/v1beta1/tx.proto#L2]
    package cosmos.bank.v1beta1;
    ```

2. And the name of the message itself, `MsgSend`:

    ```protobuf [https://github.com/cosmos/cosmos-sdk/blob/3a1027c/proto/cosmos/bank/v1beta1/tx.proto#L22]
    message MsgSend {
        ...
    }
    ```


<HighlightBox type="info">

To learn how to make your own types for your own blockchain project, head to [Create my own CosmJS objects](TODO).

</HighlightBox>

## Multiple token transfer messages

From here, you can add an extra message for a token transfer from Alice to someone else:

```typescript
const result = await signingClient.signAndBroadcast(
    // signerAddress
    alice,
    [
        // message 1
        {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
                fromAddress: alice,
                toAddress: faucet,
                amount: [
                    { denom: "uatom", amount: "100000" },
                ],
            },
          },
        // message 2
        {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
                fromAddress: alice,
                toAddress: some_other_address,
                amount: [
                    { denom: "token", amount: "10" },
                ],
            },
          },
    ],
    // the fee
    "auto",
)
```

Note how the custom fee input was replaced with the `auto` input, which simulates the transaction to estimate the fee for you. In order to make that work well, you'll need to define the `gasPrice` you're willing to pay and its `prefix` when setting up your `signingClient`. You can replace your original line of code with:

```typescript
const signingClient = await SigningStargateClient.connectWithSigner(
    rpc,
    aliceSigner,
    {
        prefix: "cosmos",
        gasPrice: GasPrice.fromString("0.0025uatom")
    }
)
```

## Mixing other message types

The above example shows you two token-transfer messages in a single transaction. You can see this with their `typeUrl: "/cosmos.bank.v1beta1.MsgSend"`.

Neither Cosmos nor CosmJS limits you to combine messages of the same type. You can decide to combine other message types together with a token transfer. For instance, in one transaction Alice could:

1. Send tokens to the faucet.
2. Delegate some of her tokens to a validator.

How would Alice create the second message? The `SigningStargateClient` contains a predefined list of `typeUrls` that are supported by default, because they're considered to be the most commonly used messages in the Cosmos SDK. One of them so happens to be `MsgDelegate`, and that's exactly what you'll need. You can click on the source link below to see the rest of the `typeUrls` that come with `SigningStargateClient`:

```typescript [https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L94]
    ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
```

Click through to the type definition, and the `cosmjs-types` repository:

```typescript [https://github.com/confio/cosmjs-types/blob/a14662d/src/cosmos/staking/v1beta1/tx.ts#L46-L50]
export interface MsgDelegate {
    delegatorAddress: string;
    validatorAddress: string;
    amount?: Coin;
}
```

Now that you know the `typeUrl` for delegating some tokens is `/cosmos.staking.v1beta1.MsgDelegate`, you'll need to find a validator's address that Alice can delegate to. You can find a list of validators in the [testnet explorer](https://explorer.theta-testnet.polypore.xyz/validators). Select a validator and use their address in the below script which you can copy to replace your original token transfer:

```typescript
const result = await signingClient.signAndBroadcast(
    alice,
    [
        {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: {
                fromAddress: alice,
                toAddress: faucet,
                amount: [
                    { denom: "uatom", amount: "100000" },
                ],
            },
        },
        {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: {
                delegatorAddress: alice,
                validatorAddress: your_selected_validator_address,
                amount: { denom: "uatom", amount: "1000", },
            },
          },
    ],
    "auto",
)
```

When you create [your own message types in CosmJS](TODO), they have to follow this format and be declared in the same fashion.

<!-- Not supported at the moment.

## Multiple signatures

So you have sent one transaction with two messages, and it was signed only by Alice. But as the `signAndBroadcast` function made it clear, it can sign with only one signature.

Below is an advanced topic, and you may safely skip it if you prefer to move on. It builds on the previous section.

### The problem

This means that this method is not good enough if you want to, for instance, do an atomic trade. An example of an atomic trade is:

* Message 1: Alice sends `100stake` to Bob.
* Message 2: Bob sends `1token` to Alice.

It should be self-evident that:

1. Both actions should happen or none should.
2. Technically, Alice should sign the transaction because of message 1.
3. Technically, Bob should sign the transaction because of message 2.
4. Conceptually, Alice can be expected to sign the transaction to signify her acceptance of the terms of trade as expressed in both messages.
5. Conceptually, Bob can be expected to too.

Points 4 and 5 imply that Alice and Bob should sign the transaction, and not sign individual messages:

1. The reason Alice accepts to "sign message 1" is because of the presence of message 2. She would not sign message 1 in isolation.
2. The reason Bob accepts to "sign message 2" is because of the presence of message 1. He would not sign message 2 in isolation.

Let's do that with CosmJS.

### Preparation

In a real-world scenario, Alice and Bob are on different computers, and so would need to find a way to exchange their signatures **before broadcasting** the transaction.

1. It means they need to use [`sign`](https://github.com/cosmos/cosmjs/blob/7aad551/packages/stargate/src/signingstargateclient.ts#L347-L365) instead of `signAndBroadcast`.
2. There is only a communication hurdle, not a game theoretic one. For instance, whether it is Alice who signs first and sends her signature to Bob, or the reverse, does not matter. Alice has signed a full transaction and so Bob cannot change the terms of the trade while using Alice's original signature. All Bob can do is agree, in which case he signs too and broadcasts, or disagree, in which case he never signs and bins Alice's signature.

For this exercise, you get rid of this communication hurdle by having Alice and Bob on the same computer. So get a signer for Bob, like you did for Alice in the previous section:

<CodeGroup>
<CodeGroupItem title="With mnemonic" active>

```typescript
const getBobSignerFromMnemonic = async (): Promise<OfflineDirectSigner> => {
    return DirectSecp256k1HdWallet.fromMnemonic(
        (await readFile("./vega.bob.mnemonic.key")).toString(),
        {
            prefix: "cosmos",
        },
    )
}
```

</CodeGroupItem>
<CodeGroupItem title="With private key">

```typescript
const getBobSignerFromPriKey = async (): Promise<OfflineDirectSigner> => {
    return DirectSecp256k1Wallet.fromKey(
        fromHex((await readFile("./simd.bob.private.key")).toString()),
        "cosmos",
    )
}
```

</CodeGroupItem>
</CodeGroup>

With this new signer, you create the elements for Bob:

```typescript
const bobSigningClient = await SigningStargateClient.connectWithSigner(
    rpc,
    bobSigner,
    {
        gasPrice: GasPrice.fromString("2stake"),
    },
)
const bob: string = (await bobSigner.getAccounts())[0].address
```

### The transaction

The messages that Alice and Bob have come to an agreement about are the following:

```typescript
const tradeMessagess: EncodeObject[] = [
    {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
            fromAddress: alice,
            toAddress: bob,
            amount: [
                {
                    denom: "stake",
                    amount: "100",
                },
            ],
        },
    },
    {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: {
            fromAddress: bob,
            toAddress: alice,
            amount: [
                {
                    denom: "token",
                    amount: "1",
                },
            ],
        },
    },
]
```

How much gas would such a transaction cost? Here, you cannot test because the `simulate` function calls up an execution, which will complain about the wrong number of signers. But you can use a good approximation by estimating each message being sent separately:

```typescript
const estimatedGas: number =
    (await aliceSigningClient.simulate(alice, [tradeMessages[0]], "Trade"))
    + (await bobSigningClient.simulate(bob, [tradeMessages[1]], "Trade"))
```

And who will pay it? It is the signer of the first signature. It matters later.

### Signing steps

You need to sign the transaction by Alice, then to sign it by Bob, then to combine both results before you broadcast the lot. Notice that `sign` does not accept `"auto"` for gas. Your choice of gas limit and gas price is highly dependent on which platform you are going to use. Here, give up to 50% more than estimated, at a price of `1stake`:

```typescript
const gasFee: StdFee = {
    amount: [
        {
            amount: "1",
            denom: "stake",
        },
    ],
    gas: Math.ceil(estimatedGas * 1.5).toString(10),
}
```

Have Alice sign:

```typescript
const txRawAlice: TxRaw = await aliceSigningClient.sign(
    alice,
    tradeMessages,
    gasFee,
    "Trade",
)
```

And Bob too:

```typescript
const txRawBob: TxRaw = await aliceSigningClient.sign(
    bob,
    tradeMessages,
    gasFee,
    "Trade",
)
```

When you look into the components of [`TxRaw`](https://github.com/confio/cosmjs-types/blob/6102d97c9c0bebcf2ba8ebde3b5e606b20bbf6ef/src/cosmos/tx/v1beta1/tx.ts#L35-L52), you see that they are already serialized by Protobuf. To be able to combine both results, it would help to have usable objects. That's where [`Tx`](https://github.com/confio/cosmjs-types/blob/6102d97c9c0bebcf2ba8ebde3b5e606b20bbf6ef/src/cosmos/tx/v1beta1/tx.ts#L12-L26) comes in handy. It has the same fields as `TxRaw`, and if you look into `Tx.decode` function, you see how to decode `RawTx` components. What are these fields:

* `body`, this the transaction proper, and because you had the same message and fees, `txAlice.body` and `txBob.body` are identical. So pick one or the other.
* `authInfo`, as explained [here](https://github.com/confio/cosmjs-types/blob/6102d97c9c0bebcf2ba8ebde3b5e606b20bbf6ef/src/cosmos/tx/v1beta1/tx.ts#L117-L132) it is metadata. So you can:
    * Pick the information from the two arrays `txAlice.signerInfos` and `txBob.signerInfos`.
    * Take either fee because they are identical as you used the same values when signing.
* `signatures`, the created signatures, one in `txAlice.signatures` and another in `txBob.signatures`. All the signatures you need are in these two arrays.

<HighlightBox type="info"?

The keen developer will notice how in `AuthInfo.signerInfos: SignerInfo[]`, the type `SignerInfo` contains a `sequence: Long`. This sequence number indicates which transaction it is that each party is signing. This also means that Alice can _deny the service_ of the trade if she sends another transaction with the same sequence in the time it takes Bob to receive, sign and broadcast it. This could happen intentionally or not.

</HighlightBox>

### Combining Both

With this knowledge, you can combine both transactions:

```typescript
const authInfoAlice = AuthInfo.decode(txRawAlice.authInfoBytes)
const authInfoBob: AuthInfo = AuthInfo.decode(txRawBob.authInfoBytes)
const combinedTx: Tx = {
    body: TxBody.decode(txRawAlice.bodyBytes),
    authInfo: {
        signerInfos: [
            ...authInfoAlice.signerInfos,
            ...authInfoBob.signerInfos,
        ],
        fee: authInfoAlice.fee,
    },
    signatures: [...txRawAlice.signatures, ...txRawBob.signatures],
}
```

Now it is time to broadcast it. But before that, it has to be serialized:

```typescript
const response: DeliverTxResponse = await client.broadcastTx(
    Tx.encode(combinedTx).finish(),
)
```

### Test time

Check balances before and after:

```typescript
console.log(
    "Alice balance before:",
    await aliceSigningClient.getAllBalances(alice),
)
console.log(
    "Bob balance before:",
    await bobSigningClient.getAllBalances(bob),
)
```

Launch it:

```sh
$ npm run experiment
```

You should first get the balances information:

```
Alice balance before: [
  { denom: 'stake', amount: '100000000' },
  { denom: 'token', amount: '20000' }
]
Bob balance before: [
  { denom: 'stake', amount: '100000000' },
  { denom: 'token', amount: '10000' }
]
```

-->

## Next up

You are now able to send complex transactions. How about you do the same but from a Web-browser, with the help of Keplr? That is the object of the [next section](./with-keplr.md).
