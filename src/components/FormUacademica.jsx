import { useForm } from "react-hook-form";
import s from "./Uacademicas.module.css";
import { fuacadValidator } from "./validators";

const FormUacademica = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={s.formulario} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Clave:</label>
        <input
          className={s.input_clave}
          type="text"
          {...register("claveUacad", { required: true, minLength: 3 })}
        />
        <div>
          {errors.claveUacad?.type === "required" && (
            <small className={s.error}>La Clave no puede estar vacía...</small>
          )}
          {errors.claveUacad?.type === "minLength" && (
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
          placeholder="Nombre de la Unidad Académica"
          className={s.input_description}
          type="text"
          {...register("descripcionUacad", { required: true, minLength: 5 })}
        />
        <div>
          {errors.descripcionUacad?.type === "required" && (
            <small className={s.error}>
              La Descipción no puede estar vacía...
            </small>
          )}
          {errors.descripcionUacad?.type === "minLength" && (
            <small className={s.error}>
              La Descripción debe tener como minimo 5 caracteres...
            </small>
          )}
        </div>
      </div>
      <div></div>
      <div>
        <label>Coordinador:</label>
        <input
          placeholder="Nombre del coordinador"
          className={s.input_description}
          type="text"
          {...register("coordinadorUacad", { required: true, minLength: 10 })}
        />
        <div>
          {errors.coordinadorUacad?.type === "required" && (
            <small className={s.error}>
              La Descipción no puede estar vacía...
            </small>
          )}
          {errors.coordinadorUacad?.type === "minLength" && (
            <small className={s.error}>
              La Descripción debe tener como minimo 10 caracteres...
            </small>
          )}
        </div>
      </div>
      <div></div>
      <div>
        <label>Fecha de Creación:</label>
        <input
          className={s.input_date}
          type="date"
          {...register("fechaCreaUacad", {
            required: true,
            validate: fuacadValidator,
          })}
        />
        <div>
          {errors.fechaCreaUacad && (
            <small className={s.error}>
              La Fecha debe ser igual o menor que hoy...
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
};

export default FormUacademica;
