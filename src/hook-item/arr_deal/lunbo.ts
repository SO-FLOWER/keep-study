<div className={styles.database}>
  <p className={styles.titlesub}>数据库</p>
  <div className={styles.databaseList}>
    <i
      className={`${styles.btnPrev} ${styles.btn}`}
      onClick={() => pageUp("prev")}
    ></i>
    <div className={styles.listBox}>
      {[dataList[dataList.length - 1]].map((item) => {
        return (
          <div
            className={`${styles.items} ${styles.prevClone}`}
            style={{
              transition: xs !== 0 ? "0.6s" : "0s",
              transform: `translate(${xs}px)`,
            }}
            key={item.type}
          >
            <img
              src={require(`@/resources/img/database/${item.type}.png`)}
              alt={item.name}
            />
            {item.name}
          </div>
        );
      })}
      <ul
        className={styles.list}
        style={{
          transition: xs !== 0 ? "0.6s" : "0s",
          transform: `translate(${xs}px)`,
        }}
      >
        {dataList.map((item) => {
          return (
            <li className={styles.items} key={item.type}>
              <img
                src={require(`@/resources/img/database/${item.type}.png`)}
                alt={item.name}
              />
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
    <i
      className={`${styles.btnNext} ${styles.btn}`}
      onClick={() => pageUp("next")}
    ></i>
  </div>
</div>;

const [dataList, setDataList] = useState([
  {
    name: "区史库",
    type: "history",
  },
  {
    name: "人口库",
    type: "user",
  },
  {
    name: "企业库",
    type: "business",
  },
  {
    name: "事项库",
    type: "events",
  },
  {
    name: "地理库",
    type: "site",
  },
  {
    name: "网格库",
    type: "grid",
  },
]);
const [xs, setXs] = useState(0);

const pageUp = (status: string) => {
  if (xs !== 0) return;
  const idx = status === "prev" ? dataList.length - 1 : 0;
  const newData = dataList.filter((item, i) => i !== idx);
  setXs(idx > 0 ? 102 : -102);
  setTimeout(() => {
    setXs(0);
    newData[status === "prev" ? "unshift" : "push"](dataList[idx]);
    setDataList(newData);
  }, 600);
};
