know = {
                "hello" : "Hi, How are you?",
                "how are you" : "Good",
                "ok" : ":)",
                "hi" : "Hello",
                "i am fine" : "Great! How can i help you?"
                "i am good" : "Great! How can i help you?"
                "bye" : "Good Bye<br>Thanks for chatting.",
                "who are you" : "I am CyberSpace Virtual Assistant,<br> Now how may i help you?", 
                "what are you" : "I am CVA.<br> I am here for your help.",
                "what is the fees" : "Please tell the course",
                "what is the fees of mca" : "Please visit here for the full details <a href=''>click here</a>",
                "what is the fee of mca" : "Please visit here for the full details <a href=''>click here</a>",
                "mca" : "Please visit here for the full details <a href=''>click here</a>",
                "btech" : "Which course in B.Tech?",
                "it" : "Please visit here for the full details <a href=''>click here</a>",
                "" : "Write something please."
            };

            
             $("chatlog-container").scrollTop($("chatlog-container")[0].scrollHeight);
            
            function talk() {
                var text1= "I don't understand.";                
                var user = document.getElementById("msg").value;
                var t = user.toLowerCase();
                t = t.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
                document.getElementById("msg").value = "";
                document.getElementById("msg").focus();
                document.getElementById("chatLog").innerHTML +=
                '<div class="chat self">'+
                '<div class="user-photo"><img src="images/boy.png"></div>'+
                '<p class="chat-msg" id="self">'+user+'</p></div>';


                if (t in know) 
                {
                    setTimeout(function(){ 
                document.getElementById("chatLog").innerHTML +=
                '<div class="chat bot">'+
                '<div class="user-photo"><img src="images/chip.png"></div>'+
                '<p class="chat-msg" id="chat-bot">'+know[t]+'</p></div>';
            },500)

                } 

                else {
                    setTimeout(function(){
                        document.getElementById("chatLog").innerHTML +=
                '<div class="chat bot">'+
                '<div class="user-photo"><img src="images/chip.png"></div>'+
                '<p class="chat-msg" id="chat-bot">'+text1+'</p></div>'; 
                    },500)
                    
                }
            } 