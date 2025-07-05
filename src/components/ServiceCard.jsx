function ServiceCard({ nome, descricao }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '250px' }}>
      <h3>{nome}</h3>
      <p>{descricao}</p>
    </div>
  );
}

export default ServiceCard;
