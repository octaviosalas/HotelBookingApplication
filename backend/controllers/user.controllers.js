import User from "../models/users.js";
import bcrypt from "bcrypt"

export const register = async (req, res) => { 
    
    const {name, password, email} = req.body
    console.log(req.body)

    await User.findOne({email})
              .then((user) => { 
                if(user) { 
                    res.json({message: "The email exist in our DataBase. Please, select other"})
                } else if (!name || !email || !password) { 
                    res.json({message: "Data is missing to be able to register. Please complete all fields"})
                } else { 
                    console.log(req.body)
                    bcrypt.hash(password, 10, (err, passwordHash) => { 
                        if(err) res.json({err})
                        else { 
                            const newUser = new User ( { 
                                name: name,
                                password: passwordHash,
                                email: email
                            })
                             newUser.save()
                                    .then((user) => { 
                                        res.json({message: "Usuario creado correctamente", user})     
                                    })
                                    .catch((err) => console.log(err))               
                        }
                    })
                }
              })
}

export const login = async (req, res) => { 

    const {password, email} = req.body
     try {
         let user = await User.findOne({email})
         if(!user) { 
            res.json({message: "Error! The user must be registered"})
         } else { 
            bcrypt.compare(password, user.password).then((correct) => { 
                if(correct) { 
                    const {id, name} = user
                    res.json({message: "successful income", 
                     user: { 
                        id,
                        name
                     }})
                } else { 
                    res.json({ mensaje: "Incorrect Password" });
                }
            })
         }
     } catch (err) {
         res.send("I cant Find an user with that data! 👎")
         console.log(err)
     }
   
}

export const getUserById = async (req, res) => { 
    const {id} = req.params;                                                         //te va a llegar por parametro un userId.
    if(id.length === 24) {                                                       // Si el userId tiene 24 caracteres (son los 24 que da por default mongodb)
       await User.findById(id).then((user) => {                                 // Busca por el Id en la base de datos. Y despues
           if(!user) {                                                             //Si no lo encontras
               return res.json({Mensaje: "El usuario no existe"})                 //decime que el usuario no existe
           } else {                                                              //y sino 
               const {_password, ...respuesta } = user._doc;           //el objeto user._doc son los datos del documento de mongodb. user._doc contiene TODO. Y aca, lo desestructuro en otro objeto llamado 
               res.json(respuesta)                                             //"respuesta" para que me devuelva como respuesta los datos del documento, pero obviamente SIN el id y sin la contraseña.
           }                                                                  //de esta manera, me devuelve solo "respuesta" que contiene el email y el nombre. Por eso lo desestructuro
       })
    } else { 
        res.json({Mensaje: "La contraseña es incorrecta"})                  //si el Id que obtiene es menor a 24 caracteres me devuelve esto
    }

}