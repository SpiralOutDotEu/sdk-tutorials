(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{605:function(e,t,o){"use strict";o.r(t);var a=o(0),c=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"create-posts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-posts"}},[e._v("#")]),e._v(" Create posts")]),e._v(" "),o("p",[e._v("By following this beginner tutorial, you will end up with a simple blog app that is powered by the Cosmos SDK.")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("This tutorial uses "),o("a",{attrs:{href:"https://github.com/tendermint/starport",target:"_blank",rel:"noopener noreferrer"}},[e._v("Starport"),o("OutboundLink")],1),e._v(" v0.15.0. Starport offers everything you need to build, test, and launch your blockchain.  To install "),o("code",[e._v("starport")]),e._v(", run the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y3VybCBodHRwczovL2dldC5zdGFycG9ydC5uZXR3b3JrL3N0YXJwb3J0QHYwLjE1LjAhIHwgYmFzaAo="}}),e._v(" "),o("p",[e._v("You can also use Starport v0.15.0 on the web in a "),o("a",{attrs:{href:"http://gitpod.io/#https://github.com/tendermint/starport/tree/v0.15.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("browser-based IDE"),o("OutboundLink")],1),e._v(". Learn more about other ways to "),o("a",{attrs:{href:"https://github.com/tendermint/starport/blob/develop/docs/1%20Introduction/2%20Install.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("install Starport"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),o("p",[e._v("Get started! The first step is to "),o("a",{attrs:{href:"https://github.com/tendermint/starport",target:"_blank",rel:"noopener noreferrer"}},[e._v("install the "),o("code",[e._v("starport")]),o("OutboundLink")],1),e._v(" CLI tool.")]),e._v(" "),o("p",[e._v("After "),o("code",[e._v("starport")]),e._v(" is installed, use it to create the initial app structure inside a directory named "),o("code",[e._v("blog")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgYXBwIGdpdGh1Yi5jb20vZXhhbXBsZS9ibG9nCg=="}}),e._v(" "),o("p",[e._v("One of the main features of Starport is code generation. The command above has generated a directory structure with a working blockchain application. Starport can also add data types to your app with "),o("code",[e._v("starport type")]),e._v(" command. To see it in action, follow the poll application tutorial. In this guide, however, you will create those files manually to understand how it all works under the hood.")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Take a quick look at what Starport has generated for us:\nThe "),o("a",{attrs:{href:"https://docs.cosmos.network/master/basics/app-anatomy.html#core-application-file",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("app/app.go")]),o("OutboundLink")],1),e._v(" file imports and configures SDK modules and creates a constructor for the application that extends a "),o("a",{attrs:{href:"https://docs.cosmos.network/master/core/baseapp.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("basic SDK application"),o("OutboundLink")],1),e._v(" among other things. This app will use only a couple standard modules bundled with Cosmos SDK (including "),o("code",[e._v("auth")]),e._v(" for dealing with accounts and "),o("code",[e._v("bank")]),e._v(" for handling coin transfers) and one module ("),o("code",[e._v("x/blog")]),e._v(") that will contain custom functionality.")]),e._v(" "),o("p",[e._v("In "),o("code",[e._v("cmd")]),e._v(" directory you have source files of two programs for interacting with our application: "),o("code",[e._v("blogd")]),e._v(" starts a full-node for your blockchain and enables you to query the full-node, either to update the state by sending a transaction or to read it via a query.")]),e._v(" "),o("p",[e._v("This blog app will store data in a persistent "),o("a",{attrs:{href:"https://docs.cosmos.network/master/core/store.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("key-value store"),o("OutboundLink")],1),e._v(". Similarly to most key-value stores, you can retrieve, delete, update, and loop through keys to obtain the values you are interested in.")]),e._v(" "),o("p",[e._v("Create a simple blog-like application and define the first proto type, the "),o("code",[e._v("Post")]),e._v(" in the "),o("code",[e._v("post.proto")]),e._v(" file.")]),e._v(" "),o("h2",{attrs:{id:"create-the-proto-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-proto-file"}},[e._v("#")]),e._v(" Create the Proto File")]),e._v(" "),o("p",[e._v("Create the "),o("code",[e._v("post.proto")]),e._v(" file.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gcHJvdG8vYmxvZy9wb3N0LnByb3RvCnN5bnRheCA9ICZxdW90O3Byb3RvMyZxdW90OzsKcGFja2FnZSBleGFtcGxlLmJsb2cuYmxvZzsKCm9wdGlvbiBnb19wYWNrYWdlID0gJnF1b3Q7Z2l0aHViLmNvbS9leGFtcGxlL2Jsb2cveC9ibG9nL3R5cGVzJnF1b3Q7OwoKaW1wb3J0ICZxdW90O2dvZ29wcm90by9nb2dvLnByb3RvJnF1b3Q7OwoKbWVzc2FnZSBQb3N0IHsKICBzdHJpbmcgY3JlYXRvciA9IDE7CiAgc3RyaW5nIGlkID0gMjsKICBzdHJpbmcgdGl0bGUgPSAzOyAKICBzdHJpbmcgYm9keSA9IDQ7IAp9CgptZXNzYWdlIE1zZ0NyZWF0ZVBvc3QgewogIHN0cmluZyBjcmVhdG9yID0gMTsKICBzdHJpbmcgdGl0bGUgPSAyOyAKICBzdHJpbmcgYm9keSA9IDM7IAp9Cg=="}}),e._v(" "),o("p",[e._v("The code above defines the four properties of a post: Creator, Title, Body and ID. We generate unique global IDs for each post and also store them as strings.")]),e._v(" "),o("p",[e._v("Posts in the key-value store will look like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"JnF1b3Q7cG9zdC0wJnF1b3Q7OiB7CiAgJnF1b3Q7Q3JlYXRvciZxdW90OzogJnF1b3Q7Y29zbW9zMThjZDV0NG1zdnAybHB1dmg5OXJ3Z2xybWpycnc5cXg1aDNmM2d6JnF1b3Q7LAogICZxdW90O1RpdGxlJnF1b3Q7OiAmcXVvdDtUaGlzIGlzIGEgcG9zdCEmcXVvdDssCiAgJnF1b3Q7Qm9keSZxdW90OzogJnF1b3Q7V2VsY29tZSB0byBteSBibG9nIGFwcC4mcXVvdDssCiAgJnF1b3Q7SUQmcXVvdDs6ICZxdW90OzAmcXVvdDsKfSwKJnF1b3Q7cG9zdC0xJnF1b3Q7OiB7CiAgLi4uCn0K"}}),e._v(" "),o("p",[e._v("Right now the store is empty. Next, define how the user adds a posts.")]),e._v(" "),o("p",[e._v("With the Cosmos SDK, users can interact with your app with either a CLI ("),o("code",[e._v("blogd")]),e._v(") or by sending HTTP requests. Let's define the CLI command first. Users should be able to type "),o("code",[e._v("blogd tx blog create-post 'This is a post!' 'Welcome to my blog app.' --from=alice")]),e._v(" to add a post to your store. The "),o("code",[e._v("create-post")]),e._v(" subcommand hasn’t been defined yet--let’s do it now.")]),e._v(" "),o("h2",{attrs:{id:"create-the-cli-function"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-cli-function"}},[e._v("#")]),e._v(" Create the CLI Function")]),e._v(" "),o("p",[e._v("Open the CLI transaction file "),o("code",[e._v("x/blog/client/cli/tx.go")]),e._v(".")]),e._v(" "),o("p",[e._v("In the "),o("code",[e._v("import")]),e._v(" block, make sure to import the following packages:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2NsaWVudC9jbGkvdHguZ28KaW1wb3J0ICgKCSZxdW90O2ZtdCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vc3BmMTMvY29icmEmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudCZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQvZmxhZ3MmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50L3R4JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2V4YW1wbGUvYmxvZy94L2Jsb2cvdHlwZXMmcXVvdDsKKQo="}}),e._v(" "),o("p",[e._v("This file already contains the function "),o("code",[e._v("GetTxCmd")]),e._v(" which defines custom "),o("code",[e._v("blogd")]),e._v(" "),o("a",{attrs:{href:"https://docs.cosmos.network/master/building-modules/module-interfaces.html#cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("commands"),o("OutboundLink")],1),e._v(". We will add the custom "),o("code",[e._v("create-post")]),e._v(" command to our "),o("code",[e._v("blogd")]),e._v(" by first adding "),o("code",[e._v("CmdCreatePost")]),e._v(" to "),o("code",[e._v("blogTxCmd")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgMQoJY21kLkFkZENvbW1hbmQoQ21kQ3JlYXRlUG9zdCgpKQo="}}),e._v(" "),o("p",[e._v("At the end of the file, let's define "),o("code",[e._v("CmdCreatePost")]),e._v(" itself.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBDbWRDcmVhdGVQb3N0KCkgKmNvYnJhLkNvbW1hbmQgewoJY21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7Y3JlYXRlLXBvc3QgW3RpdGxlXSBbYm9keV0mcXVvdDssCgkJU2hvcnQ6ICZxdW90O0NyZWF0ZXMgYSBuZXcgcG9zdCZxdW90OywKCQlBcmdzOiAgY29icmEuRXhhY3RBcmdzKDIpLAoJCVJ1bkU6IGZ1bmMoY21kICpjb2JyYS5Db21tYW5kLCBhcmdzIFtdc3RyaW5nKSBlcnJvciB7CgkJCWFyZ3NUaXRsZSA6PSBzdHJpbmcoYXJnc1swXSkKCQkJYXJnc0JvZHkgOj0gc3RyaW5nKGFyZ3NbMV0pCiAgICAgIAoJCQljbGllbnRDdHgsIGVyciA6PSBjbGllbnQuR2V0Q2xpZW50VHhDb250ZXh0KGNtZCkKCQkJaWYgZXJyICE9IG5pbCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCgkJCW1zZyA6PSB0eXBlcy5OZXdNc2dDcmVhdGVQb3N0KGNsaWVudEN0eC5HZXRGcm9tQWRkcmVzcygpLlN0cmluZygpLCBzdHJpbmcoYXJnc1RpdGxlKSwgc3RyaW5nKGFyZ3NCb2R5KSkKCQkJaWYgZXJyIDo9IG1zZy5WYWxpZGF0ZUJhc2ljKCk7IGVyciAhPSBuaWwgewoJCQkJcmV0dXJuIGVycgoJCQl9CgkJCXJldHVybiB0eC5HZW5lcmF0ZU9yQnJvYWRjYXN0VHhDTEkoY2xpZW50Q3R4LCBjbWQuRmxhZ3MoKSwgbXNnKQoJCX0sCgl9CgoJZmxhZ3MuQWRkVHhGbGFnc1RvQ21kKGNtZCkKCiAgICByZXR1cm4gY21kCn0K"}}),e._v(" "),o("p",[e._v("The function above defines what happens when you run the "),o("code",[e._v("create-post")]),e._v(" subcommand. "),o("code",[e._v("create-post")]),e._v(" takes two arguments "),o("code",[e._v("[title] [body]")]),e._v(", creates a message "),o("code",[e._v("NewMsgCreatePost")]),e._v(" (with title as "),o("code",[e._v("args[0]")]),e._v(" and "),o("code",[e._v("args[1]")]),e._v(") and broadcasts this message to be processed in your application.")]),e._v(" "),o("p",[e._v("This is a common pattern in the SDK: users make changes to the store by broadcasting "),o("a",{attrs:{href:"https://docs.cosmos.network/master/building-modules/messages-and-queries.html#messages",target:"_blank",rel:"noopener noreferrer"}},[e._v("messages"),o("OutboundLink")],1),e._v(". Both CLI commands and HTTP requests create messages that can be broadcasted in order for state transition to occur.")]),e._v(" "),o("h2",{attrs:{id:"define-the-message-to-create-a-post"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#define-the-message-to-create-a-post"}},[e._v("#")]),e._v(" Define the Message to Create a Post")]),e._v(" "),o("p",[e._v("Define "),o("code",[e._v("NewMsgCreatePost")]),e._v(" in a new file you should create as "),o("code",[e._v("x/blog/types/messages_post.go")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL3R5cGVzL21lc3NhZ2VzX3Bvc3QuZ28KcGFja2FnZSB0eXBlcwoKaW1wb3J0ICgKCXNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7CglzZGtlcnJvcnMgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy9lcnJvcnMmcXVvdDsKKQoKdmFyIF8gc2RrLk1zZyA9ICZhbXA7TXNnQ3JlYXRlUG9zdHt9Cg=="}}),e._v(" "),o("p",[e._v("Similarly to the post proto, "),o("code",[e._v("MsgCreatePost")]),e._v(" contains our post definition.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdNc2dDcmVhdGVQb3N0KGNyZWF0b3Igc3RyaW5nLCB0aXRsZSBzdHJpbmcsIGJvZHkgc3RyaW5nKSAqTXNnQ3JlYXRlUG9zdCB7CiAgcmV0dXJuICZhbXA7TXNnQ3JlYXRlUG9zdHsKCQlDcmVhdG9yOiBjcmVhdG9yLAoJCVRpdGxlOiB0aXRsZSwKCQlCb2R5OiBib2R5LAoJfQp9Cg=="}}),e._v(" "),o("p",[o("code",[e._v("NewMsgCreatePost")]),e._v(" is a constructor function that creates the "),o("code",[e._v("MsgCreatePost")]),e._v(" message. The following five functions have to be defined to implement the "),o("code",[e._v("Msg")]),e._v(" interface. They allow you to perform validation that doesn’t require access to the store (like checking for empty values), etc.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gUm91dGUgLi4uCmZ1bmMgKG1zZyBNc2dDcmVhdGVQb3N0KSBSb3V0ZSgpIHN0cmluZyB7CglyZXR1cm4gUm91dGVyS2V5Cn0KCi8vIFR5cGUgLi4uCmZ1bmMgKG1zZyBNc2dDcmVhdGVQb3N0KSBUeXBlKCkgc3RyaW5nIHsKCXJldHVybiAmcXVvdDtDcmVhdGVQb3N0JnF1b3Q7Cn0KCi8vIEdldFNpZ25lcnMgLi4uCmZ1bmMgKG1zZyAqTXNnQ3JlYXRlUG9zdCkgR2V0U2lnbmVycygpIFtdc2RrLkFjY0FkZHJlc3MgewoJY3JlYXRvciwgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihtc2cuQ3JlYXRvcikKCWlmIGVyciAhPSBuaWwgewoJCXBhbmljKGVycikKCX0KCXJldHVybiBbXXNkay5BY2NBZGRyZXNze2NyZWF0b3J9Cn0KCi8vIEdldFNpZ25CeXRlcyAuLi4KZnVuYyAobXNnICpNc2dDcmVhdGVQb3N0KSBHZXRTaWduQnl0ZXMoKSBbXWJ5dGUgewoJYnogOj0gTW9kdWxlQ2RjLk11c3RNYXJzaGFsSlNPTihtc2cpCglyZXR1cm4gc2RrLk11c3RTb3J0SlNPTihieikKfQoKLy8gVmFsaWRhdGVCYXNpYyAuLi4KZnVuYyAobXNnICpNc2dDcmVhdGVQb3N0KSBWYWxpZGF0ZUJhc2ljKCkgZXJyb3IgewoJXywgZXJyIDo9IHNkay5BY2NBZGRyZXNzRnJvbUJlY2gzMihtc2cuQ3JlYXRvcikKCWlmIGVyciAhPSBuaWwgewogIAkJcmV0dXJuIHNka2Vycm9ycy5XcmFwZihzZGtlcnJvcnMuRXJySW52YWxpZEFkZHJlc3MsICZxdW90O2ludmFsaWQgY3JlYXRvciBhZGRyZXNzICglcykmcXVvdDssIGVycikKICAJfQoJcmV0dXJuIG5pbAp9Cg=="}}),e._v(" "),o("p",[e._v("Going back to "),o("code",[e._v("CmdCreatePost")]),e._v(" in "),o("code",[e._v("x/blog/client/cli/tx.go")]),e._v(", you'll see "),o("code",[e._v("MsgCreatePost")]),e._v(" being created and broadcast with "),o("code",[e._v("GenerateOrBroadcastMsgs")]),e._v(".")]),e._v(" "),o("p",[e._v("After being broadcast, the messages are processed by an important part of the application, called "),o("a",{attrs:{href:"https://docs.cosmos.network/master/building-modules/handler.html",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("handlers")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"modify-the-handler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-handler"}},[e._v("#")]),e._v(" Modify the Handler")]),e._v(" "),o("p",[e._v("You should already have the function "),o("code",[e._v("NewHandler")]),e._v(" defined which lists all available handlers. Modify it to include a new function called "),o("code",[e._v("handleMsgCreatePost")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2hhbmRsZXIuZ28KCgkJc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKCQkvLyB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZyAjIDEKCQljYXNlICp0eXBlcy5Nc2dDcmVhdGVQb3N0OgoJCQlyZXR1cm4gaGFuZGxlTXNnQ3JlYXRlUG9zdChjdHgsIGssIG1zZykKCQlkZWZhdWx0Ogo="}}),e._v(" "),o("p",[e._v("Create the handler in "),o("code",[e._v("handler_post.go")]),e._v(" file")]),e._v(" "),o("h2",{attrs:{id:"create-the-post-handler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-the-post-handler"}},[e._v("#")]),e._v(" Create the Post Handler")]),e._v(" "),o("p",[e._v("Define the function "),o("code",[e._v("handleMsgCreatePost")]),e._v(" in a new file "),o("code",[e._v("handler_post.go")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2hhbmRsZXJfcG9zdC5nbwpwYWNrYWdlIGJsb2cKCmltcG9ydCAoCglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9leGFtcGxlL2Jsb2cveC9ibG9nL2tlZXBlciZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9leGFtcGxlL2Jsb2cveC9ibG9nL3R5cGVzJnF1b3Q7CikKCmZ1bmMgaGFuZGxlTXNnQ3JlYXRlUG9zdChjdHggc2RrLkNvbnRleHQsIGsga2VlcGVyLktlZXBlciwgbXNnICp0eXBlcy5Nc2dDcmVhdGVQb3N0KSAoKnNkay5SZXN1bHQsIGVycm9yKSB7CglrLkNyZWF0ZVBvc3QoY3R4LCAqbXNnKQoKCXJldHVybiAmYW1wO3Nkay5SZXN1bHR7RXZlbnRzOiBjdHguRXZlbnRNYW5hZ2VyKCkuQUJDSUV2ZW50cygpfSwgbmlsCn0K"}}),e._v(" "),o("p",[e._v("After creating a post object with creator, ID and title, the message handler calls "),o("code",[e._v("k.CreatePost(ctx, post)")]),e._v(". “k” stands for "),o("a",{attrs:{href:"https://docs.cosmos.network/master/building-modules/keeper.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keeper"),o("OutboundLink")],1),e._v(", an abstraction used by the SDK that writes data to the store. Define the "),o("code",[e._v("CreatePost")]),e._v(" keeper function in a new "),o("code",[e._v("keeper/post.go")]),e._v(" file.")]),e._v(" "),o("h2",{attrs:{id:"add-the-post-keeper"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-the-post-keeper"}},[e._v("#")]),e._v(" Add the Post Keeper")]),e._v(" "),o("p",[e._v("First, create a new file "),o("code",[e._v("post.go")]),e._v(" in the "),o("code",[e._v("keeper/")]),e._v(" directory.\nThen, add a "),o("code",[e._v("CreatePost")]),e._v(" function that takes two arguments: a "),o("a",{attrs:{href:"https://docs.cosmos.network/master/core/context.html#context-definition",target:"_blank",rel:"noopener noreferrer"}},[e._v("context"),o("OutboundLink")],1),e._v(" and a post. Also, "),o("code",[e._v("GetPostCount")]),e._v(" and "),o("code",[e._v("SetPostCount functions")]),e._v(".")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL2tlZXBlci9wb3N0LmdvCnBhY2thZ2Uga2VlcGVyCgppbXBvcnQgKAoJJnF1b3Q7c3RyY29udiZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc3RvcmUvcHJlZml4JnF1b3Q7CglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9leGFtcGxlL2Jsb2cveC9ibG9nL3R5cGVzJnF1b3Q7CikKCi8vIEdldFBvc3RDb3VudCBnZXQgdGhlIHRvdGFsIG51bWJlciBvZiBwb3N0CmZ1bmMgKGsgS2VlcGVyKSBHZXRQb3N0Q291bnQoY3R4IHNkay5Db250ZXh0KSBpbnQ2NCB7CglzdG9yZSA6PSBwcmVmaXguTmV3U3RvcmUoY3R4LktWU3RvcmUoay5zdG9yZUtleSksIHR5cGVzLktleVByZWZpeCh0eXBlcy5Qb3N0Q291bnRLZXkpKQoJYnl0ZUtleSA6PSB0eXBlcy5LZXlQcmVmaXgodHlwZXMuUG9zdENvdW50S2V5KQoJYnogOj0gc3RvcmUuR2V0KGJ5dGVLZXkpCgoJLy8gQ291bnQgZG9lc24ndCBleGlzdDogbm8gZWxlbWVudAoJaWYgYnogPT0gbmlsIHsKCQlyZXR1cm4gMAoJfQoKCS8vIFBhcnNlIGJ5dGVzCgljb3VudCwgZXJyIDo9IHN0cmNvbnYuUGFyc2VJbnQoc3RyaW5nKGJ6KSwgMTAsIDY0KQoJaWYgZXJyICE9IG5pbCB7CgkJLy8gUGFuaWMgYmVjYXVzZSB0aGUgY291bnQgc2hvdWxkIGJlIGFsd2F5cyBmb3JtYXR0YWJsZSB0byBpbnQ2NAoJCXBhbmljKCZxdW90O2Nhbm5vdCBkZWNvZGUgY291bnQmcXVvdDspCgl9CgoJcmV0dXJuIGNvdW50Cn0KCi8vIFNldFBvc3RDb3VudCBzZXQgdGhlIHRvdGFsIG51bWJlciBvZiBwb3N0CmZ1bmMgKGsgS2VlcGVyKSBTZXRQb3N0Q291bnQoY3R4IHNkay5Db250ZXh0LCBjb3VudCBpbnQ2NCkgewoJc3RvcmUgOj0gcHJlZml4Lk5ld1N0b3JlKGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpLCB0eXBlcy5LZXlQcmVmaXgodHlwZXMuUG9zdENvdW50S2V5KSkKCWJ5dGVLZXkgOj0gdHlwZXMuS2V5UHJlZml4KHR5cGVzLlBvc3RDb3VudEtleSkKCWJ6IDo9IFtdYnl0ZShzdHJjb252LkZvcm1hdEludChjb3VudCwgMTApKQoJc3RvcmUuU2V0KGJ5dGVLZXksIGJ6KQp9CgpmdW5jIChrIEtlZXBlcikgQ3JlYXRlUG9zdChjdHggc2RrLkNvbnRleHQsIG1zZyB0eXBlcy5Nc2dDcmVhdGVQb3N0KSB7CgkvLyBDcmVhdGUgdGhlIHBvc3QKCWNvdW50IDo9IGsuR2V0UG9zdENvdW50KGN0eCkKCXZhciBwb3N0ID0gdHlwZXMuUG9zdHsKCQlDcmVhdG9yOiBtc2cuQ3JlYXRvciwKCQlJZDogICAgICBzdHJjb252LkZvcm1hdEludChjb3VudCwgMTApLAoJCVRpdGxlOiAgIG1zZy5UaXRsZSwKCQlCb2R5OiAgICBtc2cuQm9keSwKCX0KCglzdG9yZSA6PSBwcmVmaXguTmV3U3RvcmUoY3R4LktWU3RvcmUoay5zdG9yZUtleSksIHR5cGVzLktleVByZWZpeCh0eXBlcy5Qb3N0S2V5KSkKCWtleSA6PSB0eXBlcy5LZXlQcmVmaXgodHlwZXMuUG9zdEtleSArIHBvc3QuSWQpCgl2YWx1ZSA6PSBrLmNkYy5NdXN0TWFyc2hhbEJpbmFyeUJhcmUoJmFtcDtwb3N0KQoJc3RvcmUuU2V0KGtleSwgdmFsdWUpCgoJLy8gVXBkYXRlIHBvc3QgY291bnQKCWsuU2V0UG9zdENvdW50KGN0eCwgY291bnQrMSkKfQoKZnVuYyAoayBLZWVwZXIpIEdldFBvc3QoY3R4IHNkay5Db250ZXh0LCBrZXkgc3RyaW5nKSB0eXBlcy5Qb3N0IHsKCXN0b3JlIDo9IHByZWZpeC5OZXdTdG9yZShjdHguS1ZTdG9yZShrLnN0b3JlS2V5KSwgdHlwZXMuS2V5UHJlZml4KHR5cGVzLlBvc3RLZXkpKQoJdmFyIHBvc3QgdHlwZXMuUG9zdAoJay5jZGMuTXVzdFVubWFyc2hhbEJpbmFyeUJhcmUoc3RvcmUuR2V0KHR5cGVzLktleVByZWZpeCh0eXBlcy5Qb3N0S2V5ICsga2V5KSksICZhbXA7cG9zdCkKCXJldHVybiBwb3N0Cn0KCmZ1bmMgKGsgS2VlcGVyKSBIYXNQb3N0KGN0eCBzZGsuQ29udGV4dCwgaWQgc3RyaW5nKSBib29sIHsKCXN0b3JlIDo9ICBwcmVmaXguTmV3U3RvcmUoY3R4LktWU3RvcmUoay5zdG9yZUtleSksIHR5cGVzLktleVByZWZpeCh0eXBlcy5Qb3N0S2V5KSkKCXJldHVybiBzdG9yZS5IYXModHlwZXMuS2V5UHJlZml4KHR5cGVzLlBvc3RLZXkgKyBpZCkpCn0KCmZ1bmMgKGsgS2VlcGVyKSBHZXRQb3N0T3duZXIoY3R4IHNkay5Db250ZXh0LCBrZXkgc3RyaW5nKSBzdHJpbmcgewoJcmV0dXJuIGsuR2V0UG9zdChjdHgsIGtleSkuQ3JlYXRvcgp9CgpmdW5jIChrIEtlZXBlcikgR2V0QWxsUG9zdChjdHggc2RrLkNvbnRleHQpIChtc2dzIFtddHlwZXMuUG9zdCkgewoJc3RvcmUgOj0gcHJlZml4Lk5ld1N0b3JlKGN0eC5LVlN0b3JlKGsuc3RvcmVLZXkpLCB0eXBlcy5LZXlQcmVmaXgodHlwZXMuUG9zdEtleSkpCglpdGVyYXRvciA6PSBzZGsuS1ZTdG9yZVByZWZpeEl0ZXJhdG9yKHN0b3JlLCB0eXBlcy5LZXlQcmVmaXgodHlwZXMuUG9zdEtleSkpCgoJZGVmZXIgaXRlcmF0b3IuQ2xvc2UoKQoKCWZvciA7IGl0ZXJhdG9yLlZhbGlkKCk7IGl0ZXJhdG9yLk5leHQoKSB7CgkJdmFyIG1zZyB0eXBlcy5Qb3N0CgkJay5jZGMuTXVzdFVubWFyc2hhbEJpbmFyeUJhcmUoaXRlcmF0b3IuVmFsdWUoKSwgJmFtcDttc2cpCgkJbXNncyA9IGFwcGVuZChtc2dzLCBtc2cpCgl9CgoJcmV0dXJuCn0K"}}),e._v(" "),o("p",[o("code",[e._v("CreatePost")]),e._v(" creates a key by concatenating a post prefix with an ID. If you look back at how our store looks, you’ll notice keys have prefixes, for example "),o("code",[e._v("Post-value-0bae9f7d-20f8-4b51-9d5c-af9103177d66")]),e._v(" contains the prefix "),o("code",[e._v("Post-value-")]),e._v(" . The reason for this is you have one store, but you might want to keep different types of objects in it, like posts and users. Prefixing keys such as "),o("code",[e._v("Post-value-")]),e._v(" and "),o("code",[e._v("User-value-")]),e._v(" allows you to share one storage space between different types of objects.")]),e._v(" "),o("h2",{attrs:{id:"add-the-prefix-for-a-post"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-the-prefix-for-a-post"}},[e._v("#")]),e._v(" Add the Prefix for a Post")]),e._v(" "),o("p",[e._v("To define the post prefix add the following code:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL3R5cGVzL2tleXMuZ28KcGFja2FnZSB0eXBlcwoKY29uc3QgKAoJLy8gT3RoZXIgY29uc3RhbnRzLi4uCgoJLy8gUG9zdEtleSBkZWZpbmVzIHRoZSBwb3N0IHZhbHVlIHN0b3JlIGtleQogIAlQb3N0S2V5PSAmcXVvdDtQb3N0LXZhbHVlLSZxdW90OwoKCS8vIFBvc3RDb3VudEtleSBkZWZpbmVzIHRoZSBwb3N0IGNvdW50IHN0b3JlIGtleQoJUG9zdENvdW50S2V5PSAmcXVvdDtQb3N0LWNvdW50LSZxdW90OwopCg=="}}),e._v(" "),o("h2",{attrs:{id:"add-the-codec"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-the-codec"}},[e._v("#")]),e._v(" Add the Codec")]),e._v(" "),o("p",[e._v("Finally, "),o("code",[e._v("store.Set(key, value)")]),e._v(" writes our post to the store.\nTwo last things to do is tell our "),o("a",{attrs:{href:"https://docs.cosmos.network/master/core/encoding.html#amino",target:"_blank",rel:"noopener noreferrer"}},[e._v("encoder"),o("OutboundLink")],1),e._v(" how the "),o("code",[e._v("MsgCreatePost")]),e._v(" is converted to bytes.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9ibG9nL3R5cGVzL2NvZGVjLmdvCnBhY2thZ2UgdHlwZXMKCmltcG9ydCAoCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CgljZGN0eXBlcyAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjL3R5cGVzJnF1b3Q7CgkvLyB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZyAjIDEKCXNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7CikKCmZ1bmMgUmVnaXN0ZXJDb2RlYyhjZGMgKmNvZGVjLkxlZ2FjeUFtaW5vKSB7CgkvLyB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZyAjIDIKCWNkYy5SZWdpc3RlckNvbmNyZXRlKCZhbXA7TXNnQ3JlYXRlUG9zdHt9LCAmcXVvdDtibG9nL0NyZWF0ZVBvc3QmcXVvdDssIG5pbCkKfQoKZnVuYyBSZWdpc3RlckludGVyZmFjZXMocmVnaXN0cnkgY2RjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkpIHsKCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgMwoJcmVnaXN0cnkuUmVnaXN0ZXJJbXBsZW1lbnRhdGlvbnMoKCpzZGsuTXNnKShuaWwpLAoJCSZhbXA7TXNnQ3JlYXRlUG9zdHt9LAoJKQp9Cgp2YXIgKAoJYW1pbm8gICAgID0gY29kZWMuTmV3TGVnYWN5QW1pbm8oKQoJTW9kdWxlQ2RjID0gY29kZWMuTmV3QW1pbm9Db2RlYyhhbWlubykKKQo="}}),e._v(" "),o("h2",{attrs:{id:"launch-the-application"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#launch-the-application"}},[e._v("#")]),e._v(" Launch the Application")]),e._v(" "),o("p",[e._v("Now you are ready to build and start the app and create some posts.")]),e._v(" "),o("p",[e._v("To launch the application run:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3RhcnBvcnQgc2VydmUK"}}),e._v(" "),o("p",[e._v("This command installs dependencies, builds and initializes the app, and runs servers. You can also do it manually:")]),e._v(" "),o("p",[e._v("First, create a "),o("code",[e._v("Makefile")]),e._v(" in your "),o("code",[e._v("/blog")]),e._v(" root directory")]),e._v(" "),o("h3",{attrs:{id:"create-a-makefile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-makefile"}},[e._v("#")]),e._v(" Create a Makefile")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"UEFDS0FHRVM9JChzaGVsbCBnbyBsaXN0IC4vLi4uIHwgZ3JlcCAtdiAnL3NpbXVsYXRpb24nKQoKVkVSU0lPTiA6PSAkKHNoZWxsIGVjaG8gJChzaGVsbCBnaXQgZGVzY3JpYmUgLS10YWdzKSB8IHNlZCAncy9edi8vJykKQ09NTUlUIDo9ICQoc2hlbGwgZ2l0IGxvZyAtMSAtLWZvcm1hdD0nJUgnKQoKbGRmbGFncyA9IC1YIGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdmVyc2lvbi5OYW1lPWJsb2cgXAoJLVggZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay92ZXJzaW9uLlNlcnZlck5hbWU9YmxvZ2QgXAoJLVggZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay92ZXJzaW9uLlZlcnNpb249JChWRVJTSU9OKSBcCgktWCBnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3ZlcnNpb24uQ29tbWl0PSQoQ09NTUlUKSAKCkJVSUxEX0ZMQUdTIDo9IC1sZGZsYWdzICckKGxkZmxhZ3MpJwoKYWxsOiBpbnN0YWxsCgppbnN0YWxsOiBnby5zdW0KCUBlY2hvICZxdW90Oy0tJmd0OyBJbnN0YWxsaW5nIGJsb2dkJnF1b3Q7CglAZ28gaW5zdGFsbCAtbW9kPXJlYWRvbmx5ICQoQlVJTERfRkxBR1MpIC4vY21kL2Jsb2dkCgpnby5zdW06IGdvLm1vZAoJQGVjaG8gJnF1b3Q7LS0mZ3Q7IEVuc3VyZSBkZXBlbmRlbmNpZXMgaGF2ZSBub3QgYmVlbiBtb2RpZmllZCZxdW90OwoJR08xMTFNT0RVTEU9b24gZ28gbW9kIHZlcmlmeQoKdGVzdDoKCUBnbyB0ZXN0IC1tb2Q9cmVhZG9ubHkgJChQQUNLQUdFUykK"}}),e._v(" "),o("ol",[o("li",[o("code",[e._v("go mod tidy")]),e._v(" cleans up dependencies.")]),e._v(" "),o("li",[o("code",[e._v("make")]),e._v(" builds your app and creates a binary in your go path: "),o("code",[e._v("blogd")]),e._v(".")]),e._v(" "),o("li",[e._v("Initialization scripts in the "),o("code",[e._v("Makefile")]),e._v(" removes data directories, configures your app and generates two accounts. By default your app stores data in your home directory in "),o("code",[e._v("~/.blogd")]),e._v(". The script removes them, so every time you have a clean state.")]),e._v(" "),o("li",[o("code",[e._v("blogd start")]),e._v(" launches your app. After a couple of seconds you will see hashes of blocks being generated. Leave this terminal window open and open a new one.")])]),e._v(" "),o("p",[e._v("Note: depending on your OS and firewall settings, you may have to accept a prompt asking if your application's binary ("),o("code",[e._v("blogd")]),e._v(" in this case) can accept external connections.")]),e._v(" "),o("p",[e._v("Run the following command to create a post:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YmxvZ2QgdHggYmxvZyBjcmVhdGUtcG9zdCAmcXVvdDtNeSBmaXJzdCBwb3N0JnF1b3Q7ICZxdW90O1RoaXMgaXMgYSBwb3N0XCEmcXVvdDsgLS1mcm9tPWFsaWNlCg=="}}),e._v(" "),o("p",[e._v("“My first post” is a title for our post and "),o("code",[e._v("--from=alice")]),e._v(" tells the program who is creating this post. "),o("code",[e._v("alice")]),e._v(" is a label for your pair of keys used to sign the transaction, created by the initialization script located within the "),o("code",[e._v("/Makefile")]),e._v(" previously. Keys are stored in "),o("code",[e._v("~/.blogd")]),e._v(".")]),e._v(" "),o("p",[e._v("After running the command and confirming it, you will see an object with “txhash” property with a value like "),o("code",[e._v("4B7B68DEACC7CDF3243965A449095B4AB895C9D9BDF0516725BF2173794A9B3C")]),e._v(".")]),e._v(" "),o("p",[e._v("To verify that the transaction has been processed, open a browser and visit the following URL (make sure to replace "),o("code",[e._v("4B7B6...")]),e._v(" with the value of your txhash but make sure to have the "),o("code",[e._v("0x")]),e._v(" prefix):")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"aHR0cDovL2xvY2FsaG9zdDoyNjY1Ny90eD9oYXNoPTB4NEI3QjY4REVBQ0M3Q0RGMzI0Mzk2NUE0NDkwOTVCNEFCODk1QzlEOUJERjA1MTY3MjVCRjIxNzM3OTRBOUIzQwo="}}),e._v(" "),o("p",[e._v("In the URL, retain the "),o("code",[e._v("0x")]),e._v(" prefix but replace "),o("code",[e._v("4B7B6...")]),e._v(" with the value of your txhash:\nYou can check out a basic block overview in a web browser:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"aHR0cDovL2xvY2FsaG9zdDoxMjM0NS8jL2Jsb2Nrcwo="}}),e._v(" "),o("p",[e._v("Congratulations! You have just created and launched your custom blockchain and sent the first transaction 🎉")]),e._v(" "),o("h2",{attrs:{id:"forgot-something"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forgot-something"}},[e._v("#")]),e._v(" Forgot something?")]),e._v(" "),o("h3",{attrs:{id:"unknown-command-create-post-for-blog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unknown-command-create-post-for-blog"}},[e._v("#")]),e._v(' Unknown command "create-post" for "blog"')]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmxvZ2QgdHggYmxvZyBjcmVhdGUtcG9zdCAnSGVsbG8hJyAnTXkgZmlyc3QgcG9zdCcgLS1mcm9tPWFsaWNlCkVSUk9SOiB1bmtub3duIGNvbW1hbmQgJnF1b3Q7Y3JlYXRlLXBvc3QmcXVvdDsgZm9yICZxdW90O2Jsb2cmcXVvdDsK"}}),e._v(" "),o("p",[e._v("Make sure you’ve added "),o("code",[e._v("cmd.AddCommand(CmdCreatePost())")]),e._v(", to "),o("code",[e._v("func GetTxCmd")]),e._v(" in "),o("code",[e._v("x/blog/client/cli/tx.go")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"unrecognized-blog-message-type"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unrecognized-blog-message-type"}},[e._v("#")]),e._v(" Unrecognized blog message type")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmxvZ2QgdHggYmxvZyBjcmVhdGUtcG9zdCAnSGVsbG8hJyAnTXkgZmlyc3QgcG9zdCcgLS1mcm9tPWFsaWNlCkVSUk9SOiB1bnJlY29nbml6ZWQgYmxvZyBtZXNzYWdlIHR5cGUK"}}),e._v(" "),o("p",[e._v("Make sure you have added\n"),o("code",[e._v("case *types.MsgCreatePost: \treturn handleMsgCreatePost(ctx, k, msg)")]),e._v("\nto "),o("code",[e._v("func NewHandler")]),e._v(" in "),o("code",[e._v("x/blog/handler.go")])]),e._v(" "),o("h3",{attrs:{id:"cannot-encode-unregistered-concrete-type"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cannot-encode-unregistered-concrete-type"}},[e._v("#")]),e._v(" Cannot encode unregistered concrete type")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmxvZ2QgdHggYmxvZyBjcmVhdGUtcG9zdCBIZWxsbyEgLS1mcm9tPWFsaWNlCnBhbmljOiBDYW5ub3QgZW5jb2RlIHVucmVnaXN0ZXJlZCBjb25jcmV0ZSB0eXBlIHR5cGVzLk1zZ0NyZWF0ZVBvc3QuCg=="}}),e._v(" "),o("p",[e._v("Make sure you’ve added "),o("code",[e._v('cdc.RegisterConcrete(MsgCreatePost{}, "blog/CreatePost", nil)')]),e._v(" to "),o("code",[e._v("func RegisterCodec")]),e._v(" in "),o("code",[e._v("x/blog/types/codec.go")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"not-found-key-not-found"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#not-found-key-not-found"}},[e._v("#")]),e._v(" not found: key not found")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"RXJyb3I6IHJwYyBlcnJvcjogY29kZSA9IE5vdEZvdW5kIGRlc2MgPSBhY2NvdW50IGNvc21vczF0M3JhZnh2eTNnZ2x1Y2htNXNqemV0ajl3dDUwZXE5aGpheTZmMiBub3QgZm91bmQ6IGtleSBub3QgZm91bmQK"}}),e._v(" "),o("p",[e._v("Make sure that you wait for the first block to be created after bootstrapping a chain again.")])],1)}),[],!1,null,null,null);t.default=c.exports}}]);