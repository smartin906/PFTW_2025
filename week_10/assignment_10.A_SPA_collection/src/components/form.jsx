import { useForm } from "react-hook-form";
export function NewBookForm(props) {
const { addBookFn } = props;
const { register, handleSubmit, formState: { errors }, reset } = useForm();
function handleSubmitJob(data) {
    addBookFn(data);
    reset();
}
return (
<div>
      <form onSubmit={handleSubmit(handleSubmitJob)}>
        <fieldset>
          <legend>Add a new James Bond book</legend>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" {...register("title", { required: true })} />
          {errors.title && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="villain">Villain</label>
          <input type="text" id="villain" {...register("villain", { required: true })} />
          {errors.villain && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="objective">Objective</label>
          <textarea type="text" id="objective" {...register("objective", { required: true })} />
          {errors.objective && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="outcome">Outcome</label>
          <textarea type="text" id="outcome" {...register("outcome", { required: true })} />
          {errors.outcome && <span>This field is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input type="text" id="image" {...register("image", { required: true })} />
          {errors.image && <span>This field is required</span>}
        </div>
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
        );
    }
    export default NewBookForm;