import CreationForm from "../../components/CreationForm";

function CreatePage() {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm grow md:max-w-3xl">
        <CreationForm />
      </div>
    </div>
  );
}

CreatePage.propTypes = {};

export default CreatePage;
