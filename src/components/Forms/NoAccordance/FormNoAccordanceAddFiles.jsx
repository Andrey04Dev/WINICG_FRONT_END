import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetAllNoAccordance } from '../../../redux/noAccordanceSlice';
import Form from '../../FormFields/Form'
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";
import { ButtonLink } from "../../common/Button";
import ShowFileType from "../../common/ShowFileType";
import ContainerFileUpload from "../../common/ContainerFileUpload";

const FormNoAccordanceADdFiles = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [showModalRisk, setShowModalRisk] = useState(false);
      const { id } = useParams();
      const [files, setFiles] = useState([]);
      const dispatch = useDispatch();
      const {loading,success,message} = useSelector(state=> state.files)
    
      const handleAddFilesRisks = async (data) => {
        const filesArray = [];
        // eslint-disable-next-line array-callback-return
         files.map(file =>{
           filesArray.push(file.file)
         })
         data.files = filesArray
    
        const f = new FormData();
        for (let i = 0; i < data.files.length; i++) {
          const element = data.files[i];
          f.append("files", element);
    
          console.log("dentro del for", element);
        }
        f.append("id", data.id);
        //dispatch(AddFiles(f));
        setShowModalRisk(true);
        console.log(data.files);
      };
    
      const reloadIsoRule = () => {
        dispatch(GetAllNoAccordance());
      };
      //Cerrando el modal
      const handleOnCloseModalRule = () => {
        setShowModalRisk(false);
      };
    
      const changeInputFiles = (e) => {
        //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
        let indexFile;
    
        //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
        if (files.length > 0) {
          indexFile = files[files.length - 1].index + 1;
        } else {
          indexFile = 0;
        }
    
        let newFilesToState = readmultifiles(e, indexFile);
        let newFilesState = [...files, ...newFilesToState];
        setFiles(newFilesState);
    
        console.log("Lo que me da el changeinputfiles", newFilesState);
      };
      //Aqui leemos todas la imagenes para guardar en la variable setFiles
      function readmultifiles(e, indexInicial) {
        const files = e.currentTarget.files;
        //el array con las imagenes nuevas
        const arrayFiles = [];
        Object.keys(files).forEach((i) => {
          const file = files[i];
          arrayFiles.push({
            index: indexInicial,
            name: file.name,
            file,
          });
          indexInicial++;
        });
        //despues de haber concluido el ciclo retornamos los nuevos archivos
        return arrayFiles;
      }
    
     //Eliminamos los archivos
     function deleteFiles(indice) {
    
      // const newFiles = files.filter(function (element) {
      //   return element.index !== indice;
      // });
      
      console.log("Los nuevos archivos despues del delete", indice);
      //setFiles(newFiles);
    }
      return (
        <Fragment>
          <Form
            buttonLabel="Agregar archivos "
            register={register}
            handleSubmit={handleSubmit}
            title={"Agregar archivos al riesgo seleccionado"}
            onSubmit={handleAddFilesRisks}
          >
            <ContainerFileUpload>
              {files.length === 0 ? (
                <label className="btn btn-danger">
                  <span>Seleccionar archivos </span>
                  <input
                    type={"text"}
                    name={"id"}
                    defaultValue={id || ""}
                    {...register("id")}
                    hidden
                  />
                  <input
                    className={"btn btn-danger"}
                    type="file"
                    name="files"
                    id="files"
                    {...register("files")}
                    multiple
                    onChange={changeInputFiles}
                  />
                </label>
              ) : (
                <div className="row justify-content-center align-items-center w-100">
                  {files.map((file) => (
                    <div className="col-2" key={file.index}>
                      <ShowFileType file={file} />
                    </div>
                  ))}
                </div>
              )}
            </ContainerFileUpload>
          </Form>
          <Modal
            size={"modal-dialog-centered"}
            title="Agregar archivo del riesgo"
            showModal={showModalRisk}
            onClose={handleOnCloseModalRule}
            children={
              loading ? <Spinner /> : <p className="text-center">{message}</p>
            }
            footer={
              success && success ? (
                <ButtonLink
                  name={"OK!"}
                  onClick={reloadIsoRule}
                  className="btn btn-success"
                  to={"/risks"}
                />
              ) : (
                <ButtonLink
                  className="btn btn-danger"
                  name={"Error"}
                  to={`/risks/addFilesRisks/${id}`}
                />
              )
            }
          />
        </Fragment>
      );
    };
export default FormNoAccordanceADdFiles