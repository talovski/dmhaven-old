const ArmorClass = ({ armorClass }) => (
  <>
    <p>Armor class — base: {armorClass.base}</p>
    <p>Armor class — dex bonus: {armorClass.dex_bonus}</p>
    <p>Armor class — max bonus: {armorClass.max_bonus}</p>
  </>
)

export default ArmorClass