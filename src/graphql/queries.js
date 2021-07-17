import { gql } from "@apollo/client";
  


export const GET_ALL = gql`
  query ($types:[TodoTypes!] , $order:Ordering, $isDone: Boolean){
    getTodoList(filters:{isDone:$isDone, types:$types}, orderBy:$order){
      id,
      createdAt,
      type,
      isDone,
      text,
      title
     }
  }
`;

export const GET_BY_ID = gql`
  query ($id: ID!){
    getTodoById(id: $id){
    	id,
    	createdAt,
    	type,
    	isDone,
    	text,
    	title
    }
}
  `;


export const UPDATE_TODO = gql`
  mutation ($id: ID!, $isDone: Boolean!){
   updateTodoStatusById(id: $id, isDone: $isDone){
    	id,
    	createdAt,
    	type,
    	isDone,
    	text,
    	title
    }
  }
  `



