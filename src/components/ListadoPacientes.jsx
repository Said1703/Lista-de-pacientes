import Paciente from "./Paciente";

export default function ListadoPacientes({ pacientes }) {
  return (
    <div className="w-1/2 lg:w-3/5 h-screen overflow-scroll">
      <h2 className="font-black text-3x1 text-center">Lista de pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        administra tus{""}
        <span className="text-indigo-600 font-bold">Pacientes y citas</span>
      </p>

      {pacientes.map((paciente) => {
        <Paciente key={paciente.id} paciente={paciente} />;
      })}
    </div>
  );
}
