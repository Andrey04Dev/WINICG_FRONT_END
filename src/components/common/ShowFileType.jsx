import React from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const ShowFileType = ({ file, fileShow,onClick }) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {file.name.split(".").pop() === "xlsx" ||
      file.name.split(".").pop() === "xls" ? (
        <div className="text-center p-3 position-relative">
          {fileShow ? (<>
                      <Icon
                        icon={["fas", "file-excel"]}
                        className="text-success fa-5x  mx-3" />
                      <p>{file.name}</p>
                      <div className="d-flex">
                      <a className='btn btn-primary px-3' href={`data:application/vnd.ms-excel;base64,${file.content}`} download={file.name}> Descargar</a>
                      <Link type='button' className='btn btn-danger px-3 ms-3' onClick={onClick}>Eliminar</Link></div></>) : (<><Icon
                icon={["fas", "file-excel"]}
                className="text-success fa-5x mx-3 " /><p>{file.name}</p></>)}
        </div>
      ) : file.name.split(".").pop() === "pdf" ? (
        <div className="text-center p-3 position-relative">
          {fileShow ? (<>
                      <Icon
                        icon={["fas", "file-pdf"]}
                        className="text-danger fa-5x  mx-3" />
                      <p>{file.name}</p>
                      <div className="d-flex">
                      <a className='btn btn-primary px-3' href={`data:application/pdf;base64,${file.content}`} download={file.name}> Descargar</a>
                      <Link type='button' className='btn btn-danger px-3 ms-3' onClick={onClick}>Eliminar</Link>
                        </div></>) : (<><Icon
                icon={["fas", "file-excel"]}
                className="text-danger fa-5x mx-3 " /><p>{file.name}</p></>)}
        </div>
      ) : file.name.split(".").pop() === "docx" ? (
        <div className="text-center p-3 position-relative">
          {fileShow ? (<>
                      <Icon
                        icon={["fas", "file-word"]}
                        className="text-primary fa-5x  mx-3" />
                      <p>{file.name}</p>
                      <div className="d-flex">
                      <a className='btn btn-primary px-3' href={`data:application/msword;base64,${file.content}`} download={file.name}> Descargar</a>
                      <Link type='button' className='btn btn-danger px-3 ms-3' onClick={onClick}>Eliminar</Link></div></>) : (<><Icon
                icon={["fas", "file-word"]}
                className="text-primary fa-5x mx-3 " /><p>{file.name}</p></>)}
        </div>
      ) : file.name.split(".").pop() === "pptx" ? (
        <div className="text-center p-3 position-relative">
          {fileShow ? (<>
                      <Icon
                        icon={["fas", "file-powerpoint"]}
                        className="text-orange fa-5x  mx-3" />
                      <p>{file.name}</p>
                      <div className="d-flex">
                      <a className='btn btn-primary px-3' href={`data:application/vnd.ms-powerpoint;base64,${file.content}`} download={file.name}> Descargar</a>
                      <Link type='button' className='btn btn-danger px-3 ms-3' onClick={onClick}>Eliminar</Link></div></>) : (<><Icon
                icon={["fas", "file-powerpoint"]}
                className="text-orange fa-5x mx-3 " /><p>{file.name}</p></>)}
        </div>
      ) : file.name.split(".").pop() === "csv" ? (
        <div className="text-center p-3 position-relative">
          {fileShow ? (<>
                      <Icon
                        icon={["fas", "file-csv"]}
                        className="text-success fa-5x  mx-3" />
                      <p>{file.name}</p>
                      <div className="d-flex">
                      <a className='btn btn-primary px-3' href={`data:text/csv;base64,${file.content}`} download={file.name}> Descargar</a>
                      <Link type='button' className='btn btn-danger px-3 ms-3' onClick={onClick}>Eliminar</Link>
                      </div>
                      </>) : (<><Icon
                icon={["fas", "file-csv"]}
                className="text-success fa-5x mx-3 " /><p>{file.name}</p></>)}
        </div>
      ) : (
        <div className="text-center p-3 position-relative">
          <Icon icon={["fas", "file"]} className="text-warning fa-5x mx-5" />
          
          <p>{file.name}</p>
        </div>
      )}
    </div>
  );
};

export default ShowFileType;
