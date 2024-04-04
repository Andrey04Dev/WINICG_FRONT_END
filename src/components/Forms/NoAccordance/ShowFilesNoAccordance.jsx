import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { DeleteFiles, GetFilesByIdModule } from "../../../redux/filesSlice";
import ShowFileType from "../../common/ShowFileType";
import { Modal } from "../../common/Modal";
import Spinner from "../../common/Spinner";
import { Button, ButtonLink } from "../../common/Button";

const ShowFilesNoAccordance = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [showModalAccordance, setShowModalAccordance] = useState(false);
  const [idfile, setIdfile] = useState("");
  const [idmodule, setIdmodule] = useState("");
  const [deleteMessage, setDeleteMessage] = useState(false);
  const { loading, message } = useSelector((state) => state.noAccordance);
  const { id } = useParams();

  const ShowHanldeModelRiskFile = useCallback((idModule, idFile) => {
    setIdfile(idFile);
    setIdmodule(idModule);
    setShowModalAccordance(true);
  }, []);

  const handleDeleteFileAccordance = () => {
    const data = {};
    data.idmodule = idmodule;
    data.idfile = idfile;
    dispatch(DeleteFiles(data));
    setDeleteMessage(true);
  };

  const intialState = useCallback(() => {
    dispatch(GetFilesByIdModule(id))
      .unwrap()
      .then((res) => {
        const arrayFiles = [];
        res.map((res) => {
          arrayFiles.push({
            name: res.filename + "." + res.extension,
            idfile: res.idfile,
            idmodule: res.idmodule,
            content: res.binarY_FILE,
          });
        });
        setFiles(arrayFiles);
      });
  }, [dispatch, id]);
  const reloadRiskAccordance = () => {
    dispatch(GetFilesByIdModule(id))
      .unwrap()
      .then((res) => {
        const arrayFiles = [];
        res.map((res) => {
          arrayFiles.push({
            name: res.filename + "." + res.extension,
            idfile: res.idfile,
            idmodule: res.idmodule,
            content: res.binarY_FILE,
          });
        });
        setFiles(arrayFiles);
      });
      setShowModalAccordance(false);
    window.location.reload(true);
  };
  const handleOnCloseModalRisk = () => {
    setShowModalAccordance(false);
  };

  useEffect(() => {
    intialState();

    return () => {};
  }, [intialState]);
  return<div className='container'>
  <div className='d-flex justify-content-end align-items-center mt-3'>
  <Link to={`/noAccordance`} className='btn btn-secondary'>Regresar</Link>
  </div>
  <div className="row justify-content-center align-items-center w-100">
          {files.map((file, index) =>{return (
           <div key={index} className='col-3'>
            <ShowFileType file={file} fileShow={true} onClick={()=>ShowHanldeModelRiskFile(file.idmodule,file.idfile)}/>
           </div>
          )})}
          <Modal
                size={"modal-dialog-centered"}
                title="Se esta eliminado el archivo"
                showModal={showModalAccordance}
                onClose={() => { setShowModalAccordance(false) } }
                children={loading ? <Spinner /> : <p className="text-center">{message}</p>}
                footer={
                  <>
            {deleteMessage === true ? <ButtonLink
              className={"btn btn-primary"}
              to={`/noAccordance/showFilesNoAccordance/${id}`}
              onClick={reloadRiskAccordance}
              name={"Sí"}
            />:<Button
              className={"btn btn-primary"}
              onClick={handleDeleteFileAccordance}
              children={"Sí"}
            />}
            <Button
              className={"btn btn-danger"}
              onClick={handleOnCloseModalRisk}
              children={"No"}
            />
          </>} >
                  {deleteMessage === false ? `¿Está seguro que desea eliminar este archivo?`:<p className="text-center">{message}</p> }
                </Modal>
  </div>
</div>;
};

export default ShowFilesNoAccordance;
