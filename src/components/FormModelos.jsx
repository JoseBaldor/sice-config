import { useForm } from "react-hook-form";
import s from './Modelos.module.css'

const FormModelos = () =>{
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
                {...register("claveMod", { required: true, minLength: 3 })}
                />
                <div>
                    {errors.claveMod?.type === "required" && (
                        <small className={s.error}>La Clave no puede estar vacía...</small>
                    )}
                    {errors.claveMod?.type === "minLength" && (
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
                placeholder="Nombre del Modelo..."
                className={s.input_description}
                type="text"
                {...register("descripcionMod", { required: true, minLength: 5 })}
                />
                <div>
                    {errors.descripcionMod?.type === "required" && (
                        <small className={s.error}>
                        La Descipción no puede estar vacía...
                        </small>
                    )}
                    {errors.descripcionMod?.type === "minLength" && (
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

export default FormModelos;