import { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useProjects } from "../../hooks/useProjects";
import { Alerta } from "../Alert";

export const FormProject = () => {
  const { id } = useParams();
  const { alert, showAlert, storeProject, project } = useProjects();
  let { formValues, handleInputChange, reset, setFormValues,getProject } = useForm({
    name: "",
    description: "",
    dateExpire: "",
    client: "",
  });

  let { name, description, dateExpire, client } = formValues;

  useEffect(() => {
    if (id) {

      
      // let { name, description, dateExpire, client } = project;
      inputName.current.value = project.name;
      inputDescription.current.value =  project.description;
      inputClient.current.value =  project.client;
      inputDateExpire.current.value =  project.dateExpire.split("T")[0];
      
      setFormValues({
        name : project.name,
        description : project.description, 
        dateExpire: project.dateExpire.split("T")[0],
        client: project.client
      })

    }
  }, [id]);

  const inputName = useRef(null);
  const inputDescription = useRef(null);
  const inputDateExpire = useRef(null);
  const inputClient = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, description, dateExpire, client].includes("")) {
      showAlert("Todos los campos son obligatorios");
      return null;
    }
    console.log(formValues)
    storeProject({
      id: id ? id : null,
      name,
      description,
      dateExpire,
      client,
    });
  };

  return (
    <form
      className="bg-white py-5 px-5 md:w-4/4 lg:w-3/4 rounded-md border-2"
      onSubmit={handleSubmit}
    >
      {alert.msg && <Alerta {...alert} />}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre Proyecto
        </label>
        <input
          id="name"
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Nombre del proyecto"
          value={name}
          onChange={handleInputChange}
          name="name"
          ref={inputName}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Descripción
        </label>
        <textarea
          id="description"
          type="text"
          style={{ resize: "none" }}
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Descripción del proyecto"
          value={description}
          onChange={handleInputChange}
          name="description"
          ref={inputDescription}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="dateExpire"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Fecha de entrega
        </label>
        <input
          id="dateExpire"
          type="date"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={dateExpire}
          onChange={handleInputChange}
          name="dateExpire"
          ref={inputDateExpire}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="client"
          className="text-gray-700 uppercase font-bold text-sm"
        >
          Nombre Cliente
        </label>
        <input
          id="client"
          type="text"
          className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Nombre del cliente"
          value={client}
          onChange={handleInputChange}
          name="client"
          ref={inputClient}
        />
      </div>
      <Button type="submit" variant={`${false ? "success" : "secondary"}`}>
        {id ? "Actualizar proyecto" : "Guardar proyecto"}
      </Button>
    </form>
  );
};
