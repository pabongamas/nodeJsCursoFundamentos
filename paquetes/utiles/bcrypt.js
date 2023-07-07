const bcrypt=require('bcrypt');

const password='12345segura!';

bcrypt.hash(password,5,function(error,hash){
    console.log(hash);

    bcrypt.compare(password,hash,function(erro,result){
        console.log(result);
    })
})