function logScope(){
    var localvar = 2;

      if(localvar)
      {
        let localvar = "i am a string now";
        console.log("nested local var: " ,localvar);
      }

      console.log("logscope localvar", localvar);
}


logScope();
