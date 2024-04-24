import inquirer from "inquirer";

async function countwords(){

 while(true){const words = await inquirer.prompt([{
        
        name : 'Sentence',
        message : 'Write a sentence to count the words of',
        type : 'input'
                    

    }])

    const count = words.Sentence.split(' ');
    const length = count.length;

    if(length === 1){
        console.log('There is only one word.')

    }
    else {
        console.log(`There are ${length} words.`)
    };
};
}
countwords()