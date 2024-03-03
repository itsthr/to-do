export const addtodo=(todo)=>{
    return {type:"ADD_TODO",payload:todo}
}

export const edittodo = (todo) => {
  return { type: "EDIT_TODO", payload: todo };
};

export const deletetodo = (id) => {
  return { type: "DELETE_TODO", payload: id };
};
