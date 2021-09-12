import React from "react";
export default function Foods(props) {
  const { food, member2, promo2 } = props;
  return (
    <div>
      <h2>Pakan</h2>
      <p className="notes">
        member 2: {member2}<br/>
        diskon 10% sampai tanggal : {promo2}
      </p>
      {food.map((food) => (
        <div className="menu">
          <div className="nama">
            <table>
              <tr>
                <td className="cell">{food.name}</td>
                <td className="cell">{food.price}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
      <div className="space"></div>
    </div>
  );
}
