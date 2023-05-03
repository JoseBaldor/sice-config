import { useForm } from "react-hook-form";
import s from './Categorias.module.css'

const FormCategorias = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = (data)=>{
        console.log(data);
    }
    return(
        <form className={s.formulario} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Clave:</label>
                <input
                className={s.input_clave}
                type="text"
                {...register("claveCat", { required: true, minLength: 1 })}
                />
                <div>
                    {errors.claveCat?.type === "required" && (
                        <small className={s.error}>La Clave no puede estar vacía...</small>
                    )}
                    {errors.claveCat?.type === "minLength" && (
                        <small className={s.error}>
                        La Clave debe tener como minimo 1 caracteres...
                        </small>
                    )}
                </div>
            </div>
            <div></div>
            <div>
                <label>Descripción:</label>
                <input
                placeholder="Nombre de la Categoría..."
                className={s.input_description}
                type="text"
                {...register("descripcionCat", { required: true, minLength: 3 })}
                />
                <div>
                    {errors.descripcionCat?.type === "required" && (
                        <small className={s.error}>
                        La Descipción no puede estar vacía...
                        </small>
                    )}
                    {errors.descripcionCat?.type === "minLength" && (
                        <small className={s.error}>
                        La Descripción debe tener como minimo 3 caracteres...
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

export default FormCategorias;