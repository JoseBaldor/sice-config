import { useForm } from "react-hook-form";
import s from "./Lenguas.module.css";
 
const FormLenguas = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm();

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
                {...register("claveLen", { required: true, minLength: 3 })}
                />
                <div>
                    {errors.claveLen?.type === "required" && (
                        <small className={s.error}>La Clave no puede estar vacía...</small>
                    )}
                    {errors.claveLen?.type === "minLength" && (
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
                placeholder="Lengua indigena..."
                className={s.input_description}
                type="text"
                {...register("descripcionLen", { required: true, minLength: 5 })}
                />
                <div>
                    {errors.descripcionLen?.type === "required" && (
                        <small className={s.error}>
                        La Descipción no puede estar vacía...
                        </small>
                    )}
                    {errors.descripcionLen?.type === "minLength" && (
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

export default FormLenguas;