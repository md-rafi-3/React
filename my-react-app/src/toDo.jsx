// export default function ToDo({task,isDone}){
//     return(
//         <li>task:{task}</li>
//     )
// }
export default function ToDo({task,isDone}){
   if(isDone){
    return(
        <li>done:{task}</li>
    )
   }
   else{
    return(
        <li>To be done:{task}</li>
    )
   }
}