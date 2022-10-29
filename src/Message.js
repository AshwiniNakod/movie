function Message({ name, img }) {
  // const name="Ashwini";
  return (
    <>
      <h1>Hello {name} 😊</h1>
      <img className="profile_pic" src={img} alt={name} />
    </>

  );
}
