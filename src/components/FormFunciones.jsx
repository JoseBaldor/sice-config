import { useForm } from "react-hook-form";
import s from './Funciones.module.css'

const FormFunciones = () =>{

    const {register,handleSubmit,formState:{errors}} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }

    return(
        <form className={s.formulario} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Clave:</label>
                <input
                className={s.input_clave}
                type="text"
                {...register("claveFun", { required: true, minLength: 3 })}
                />
                <div>
                    {errors.claveFun?.type === "required" && (
                        <small className={s.error}>La Clave no puede estar vacía...</small>
                    )}
                    {errors.claveFun?.type === "minLength" && (
                        <small className={s.error}>
                        La Clave debe tener como minimo 3 caracteres...
                        </small>
                    )}
                </div>
            </div>
            <div></div>
            <div>
                <label>Descripción:</label>
                <input
                placeholder="Nombre de la Función..."
                className={s.input_description}
                type="text"
                {...register("descripcionFun", { required: true, minLength: 5 })}
                />
                <div>
                    {errors.descripcionFun?.type === "required" && (
                        <small className={s.error}>
                        La Descipción no puede estar vacía...
                        </small>
                    )}
                    {errors.descripcionFun?.type === "minLength" && (
                        <small className={s.error}>
                        La Descripción debe tener como minimo 5 caracteres...
                        </small>
                    )}
                </div>
            </div>
            <div className={s.submit}>
                <div>
                    <button className={s.button} type="submit">
                        Guardar
                    </button>
                </div>
            </div>

        </form>
    );

}

export default FormFunciones;