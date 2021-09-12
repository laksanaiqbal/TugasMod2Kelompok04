import React from "react";
export default function Menus(props) {
  const { menu, member1, promo1 } = props;
  return (
    <div>
      <h2>Perlengkapan</h2>
      <p className="notes">
        Member 1: {member1}<br/>
        diskon 10% sampai tanggal : {promo1}
      </p>
      {menu.map((menu) => (
        <div className="menu">
          <div className="nama">
            <table>
              <tr>
                <td className="cell">{menu.name}</td>
                <td className="cell">{menu.price}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
