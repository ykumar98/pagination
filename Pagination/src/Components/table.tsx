import * as React from 'react';

const Table = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="list-group mb-4">
      <tr className="list-group-item">
        <td>Id&nbsp;&nbsp;</td>
        <td>Name&nbsp;&nbsp;</td>
        <td>First Brewed &nbsp;&nbsp;</td>
        <td>Tag line</td>
      </tr>
      {data.map((post) => (
        <tr className="list-group-item">
          <td>{post.id}&nbsp;&nbsp;</td>
          <td key={post.id}>{post.name}d&nbsp;&nbsp;</td>
          <td>{post.first_brewed}&nbsp;&nbsp;</td>
          <td>{post.tagline}&nbsp;&nbsp;</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
