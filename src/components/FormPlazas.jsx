import { useForm } from "react-hook-form";
import s from './Plazas.module.css'

const FormPlazas = () =>{
    const {register,handleSubmit,formState:{errors}}=useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }

    return(
        <form className={s.formulario} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Clave:</label>
                <input
                className={s.input_clave}
                type="text"
                {...register("clavePlaza", { required: true, minLength: 3 })}
                />
                <div>
                    {errors.clavePlaza?.type === "required" && (
                        <small className={s.error}>La Clave no puede estar vacía...</small>
                    )}
                    {errors.clavePlaza?.type === "minLength" && (
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
                placeholder="Nombre de la plaza..."
                className={s.input_description}
                type="text"
                {...register("descripcionPlaza", { required: true, minLength: 4 })}
                />
                <div>
                    {errors.descripcionPlaza?.type === "required" && (
                        <small className={s.error}>
                        La Descipción no puede estar vacía...
                        </small>
                    )}
                    {errors.descripcionPlaza?.type === "minLength" && (
                        <small className={s.error}>
                        La Descripción debe tener como minimo 4 caracteres...
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

export default FormPlazas;