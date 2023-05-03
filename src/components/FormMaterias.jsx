import { useForm } from 'react-hook-form';
import s from './Materias.module.css'
import {semestres, ejesFormativos, areasEspecialidad} from '../data'
import { semestreValidator, creditoValidator } from './validators';

const FormMaterias = ()=>{

    const {register, handleSubmit, formState:{errors}} = useForm();

    function onSubmit(formData){
      console.log(formData);
      console.log(formData.errors);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={s.formulario}>
          <div>
            <label>Clave:</label>
            <input className={s.input_clave}  type='text' {...register("claveMat", {required: true, minLength: 3})}/>
            <div>
              {errors.claveMat?.type === 'required' && <small className={s.error}>La Clave no puede estar vacía...</small>}
              {errors.claveMat?.type ==='minLength' && <small className={s.error}>La Clave debe tener como minimo 3 caracteres...</small>}
            </div>
          </div>
          <div></div>
          <div>
              <label>Descripción:</label>
              <input className={s.input_description} type='text' {...register("descripcionMat", {required:true, minLength: 5})}/>
              <div>
                {errors.descripcionMat?.type === 'required' && <small className={s.error}>La Descipción no puede estar vacía...</small>}
                {errors.descripcionMat?.type ==='minLength' && <small className={s.error}>La Descripción debe tener como minimo 5 caracteres...</small>}
              </div>
          </div>
          <div></div>
          <div className={s.group}>
              <div>
                <label>Semestre:</label>
                <select className={s.semestre} {...register("semestreMat", {validate: semestreValidator})}>
                  <option value="0">Selecciona un semestre</option>
                  {semestres.map((sem)=>(
                    <option key={sem.num} value={sem.num}>{sem.text}</option>
                  ))}
                </select>
                <div className={s.error}>
                  {errors.semestreMat && <small>Debe seleccionar una opción...</small>}
                </div>
              </div>
              <div>
                <label >Creditos:</label>
                <input className={s.input_creditos}  type='text' {...register("creditosMat", {validate: creditoValidator})}/>
                <div className={s.error}>
                  {errors.creditosMat && <small>Debe ser un número mayor que 0...</small>}
                </div>
              </div>
              <div>
                <label >Terminal:</label>
                <input className={s.input_terminal} type='text' {...register("terminalMat")}/>
              </div>
          </div>
          <div className={s.group_ejes}>
            <div>
                <label>Eje Formativo:</label>
                <select className={s.eje_formativo} {...register("ejeFormativo")}>
                  <option value="0">Selecciona un eje</option>
                  {ejesFormativos.map((eje)=>(
                    <option key={eje.num} value={eje.text}>{eje.text}</option>
                  ))}
                </select>
            </div>
            <div>
              <label >Area de Especialidad:</label>
              <select className={s.eje_area} {...register("ejeEspecialidad")}>
                <option value="0">Selecciona un area</option>
                {areasEspecialidad.map((area)=>(
                  <option key={area.num} value={area.text}>{area.text}</option>
                ))}
              </select>
            </div>
            <div></div>
          </div>
          <div className={s.group_optativa}>
            <label>Optativa:</label>
            <input  type="checkbox" {...register("optativa")}/>
          </div>
          <div className={s.submit}>
            <div>
              <button className={s.button} type='submit'>Guardar</button>
            </div>
          </div>
        </form>
    );
}

export default FormMaterias;