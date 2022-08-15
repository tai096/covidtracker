import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function TodoListPage() {
  const [todoList, setTodoList] = useState([]);
  const [job, setJob] = useState("");
  const [editMode, setEditMode] = useState(null);
  const [editJobName, setEditJobName] = useState("");

  const handleOnClick = () => {
    if (job !== "") {
      setTodoList((prev) => [...prev, job]);
      setJob("");
    } else {
      notifyError();
    }
  };
  const handleOnChange = (e) => {
    setJob(e.target.value);
  };

  const handleDelete = (id) => {
    const removeJob = todoList.filter((jobName, jobId) => {
      return jobId !== id;
    });
    setTodoList(removeJob);
  };

  const handleEditJobName = (e) => {
    setEditJobName(e.target.value);
  };

  const saveEditedJob = (id) => {
    const updateJob = [...todoList].map((jobName, jobId) => {
      if (jobId === id) {
        jobName = editJobName;
      }
      return jobName;
    });
    setTodoList(updateJob);
    setEditMode(null);
    setEditJobName("");
  };

  const notifyError = () =>
    toast.error("Chưa nhập công việc !!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="mt-14 mx-5 lg:w-3/4 lg:mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <div className="flex items-center justify-between">
        <input
          value={job}
          onChange={handleOnChange}
          placeholder="Nhập công việc ...."
          className="bg-gray-200 mr-3 appearance-none border-2 border-gray-200 rounded py-2 px-4  focus:outline-none focus:bg-white focus:border-rose-500 w-4/5"
        ></input>
        <button
          onClick={handleOnClick}
          className="shadow-xl bg-rose-500 border-rose-500 border-2 text-white w-28 h-12 rounded-xl text-xl font-bold hover:bg-white hover:text-rose-500 transition duration-500 ease-in-out"
        >
          Add
        </button>
      </div>
      <div className="flex flex-col my-10 ">
        {todoList.map((jobName, jobId) => (
          <div
            className="flex justify-between items-center my-2 h-20 rounded-lg px-5 py-2 w-4/5 border-gray-300 hover:border-green-800 border-2"
            key={jobId}
          >
            {editMode === jobId ? (
              <input
                className="focus:outline-none focus:bg-gray-100 w-4/5 py-2 "
                value={editJobName}
                onChange={handleEditJobName}
              ></input>
            ) : (
              <p className="">{jobName}</p>
            )}
            {editMode === jobId ? (
              <>
                <button
                  onClick={() => saveEditedJob(jobId)}
                  className="text-xl p-2 rounded-full hover:bg-slate-200 active:bg-slate-300"
                >
                  ✔️
                </button>
                <button
                  onClick={() => setEditMode(null)}
                  className="text-xl p-2 rounded-full hover:bg-slate-200 active:bg-slate-300"
                >
                  ❌
                </button>
              </>
            ) : (
              <div>
                <button
                  onClick={() => handleDelete(jobId)}
                  className="mx-8 text-xl p-2 rounded-full hover:bg-slate-200 active:bg-slate-300"
                >
                  🗑
                </button>
                <button
                  onClick={() => setEditMode(jobId)}
                  className="text-xl p-2 rounded-full hover:bg-slate-200 active:bg-slate-300"
                >
                  📝
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
