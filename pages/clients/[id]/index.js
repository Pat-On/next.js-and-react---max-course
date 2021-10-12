import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();
  function loadProjectHandler() {
    // load data... etc like always
    //can go back -> data structure
    // router.push("/clients/max/projecta");

    // can not go back
    // router.replace("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[cientprojectid]",
      query: { id: "someone", clientprojectid: "test_test" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      {/* example of navigaiting programmatically */}
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectsPage;
