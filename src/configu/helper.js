
import {GithubAuthProvider, GoogleAuthProvider,signInWithRedirect, signOut} from "firebase/auth";
import { auth } from "./Firebase";
import { v4 as uuidv4 } from 'uuid';

const googleProvider= new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();

export const signInwithGoggle=async()=>{
  await signInWithRedirect(auth,googleProvider).then(userCred=>{
        window.location.reload()
    })
}

export const signInwithGithub=async()=>{
    await signInWithRedirect(auth,githubProvider).then(userCred=>{
          window.location.reload()
      })
  }

export const Menus=[
    {id:uuidv4() ,name:"Projects", url: "/home/projects"},
    {id:uuidv4() ,name:"Collections", url: "/home/collections"},
    {id:uuidv4() ,name:"Profile", url: "/home/profile"},
]  

export const signout=async()=>{
    await signOut(auth).then(()=>{
        window.location.reload();
    })
}
