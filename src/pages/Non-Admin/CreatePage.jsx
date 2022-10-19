import CreationForm from "../../components/CreationForm";

function CreatePage() {
  return (
    <div className="flex justify-center gap-16">
      <div className="max-w-3xl grow sm:mx-16 md:mx-8">
        <CreationForm />
      </div>
    </div>
  );
}

CreatePage.propTypes = {};

export default CreatePage;
