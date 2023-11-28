import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center my-10">
      <TailSpin
        height="80"
        width="80"
        color="#1976d2"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
