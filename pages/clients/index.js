import Link from "next/link";
function ClientsPage() {
  const clients = [
    { id: "max", name: "max1" },
    { id: "max2", name: "max2" },
    { id: "max3", name: "max3" },
    { id: "max4", name: "max4" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          <Link href="/clients/max">Maximilian</Link>
        </li>
        <li>
          <Link href="/clients/manu">Manuel</Link>
        </li>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
          </li>
        ))}
        <li>
          <Link
            href={{
              // alternative way of doing it
              pathname: "/clients/[id]",
              query: {
                id: "test",
              },
            }}
          >
            Other way
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ClientsPage;
