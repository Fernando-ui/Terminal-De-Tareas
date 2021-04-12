const inquirer = require('inquirer');
const colors = require('colors');

const preguntas = 
[   
    {
    type:'list',
    name:'opcion',
    message:'Que desea hacer?',
    choices: [ 
        {
            value: '1',
            name:`${'1.'.blue}Crear Tarea`
        },
        {
            value: '2',
            name: `${'2.'.blue}Listar Tareas`
        },
        {
            value: '3',
            name:`${'3.'.blue}Listar tareas completadas`
        },
        {
            value: '4',
            name:`${'4.'.blue}Listar tareas pendientes`
        },
        {
            value: '5',
            name:`${'5.'.blue}Completar Tarea(s)`
        },
        {
            value: '6',
            name:`${'6.'.blue}Borrar Tarea`
        },
        {
            value: '0',
            name:`${'0.'.blue}Salir`
        }
            ]
    }
];



const inquirerMenu = async ( ) => {

    console.clear()

    console.log('========================='.blue);
    console.log('Seleccione alguna opcion'.green);
    console.log('========================='.blue);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;


}

const ans = [{

    type:'input',
    name:'opcion',
    message:`Presiona ${'Enter'.red} para continuar`,
    
}];

const pausa = async ( ) =>{

        await inquirer.prompt(ans);
    

};
// Hacemos que muestre la pregunta que estamos mandando
const leerInput = async ( message ) => {

    const   question = [
        {

            type: 'input',
            name: 'desc',
            message,
            validate( value ){

                if( value.length === 0){

                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ]

    const { desc } = await inquirer.prompt( question );
    return desc;
    
}





module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}