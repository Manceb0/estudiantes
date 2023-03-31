import styles from "./VerPerfil.module.css";

const VerPerfil = () => {
  return (
    <div className={styles.verPerfil}>
      <div className={styles.verPerfil1}>
        <div className={styles.verPerfilChild} />
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <input
              className={styles.groupChild}
              type="text"
              placeholder="Email no encontrado"
              readOnly
            />
            <div className={styles.cumpleaos}>Cumpleaños</div>
          </div>
          <div className={styles.groupDiv}>
            <input
              className={styles.groupItem}
              type="text"
              placeholder="Email no encontrado"
              readOnly
            />
            <div className={styles.email}>{`Email `}</div>
          </div>
          <div className={styles.groupParent1}>
            <input
              className={styles.groupInner}
              type="text"
              placeholder="Apellido no encontrado"
              readOnly
            />
            <div className={styles.apellido}>Apellido</div>
          </div>
          <div className={styles.groupParent2}>
            <input
              className={styles.groupInput}
              type="text"
              placeholder="Nombre no encontrado"
              readOnly
            />
            <div className={styles.apellido}>Nombre</div>
          </div>
          <div className={styles.groupParent3}>
            <input
              className={styles.groupChild1}
              type="text"
              placeholder="ID no encontrado"
              readOnly
            />
            <div className={styles.id}>ID</div>
          </div>
          <button className={styles.frameWrapper}>
            <button className={styles.regresarWrapper}>
              <div className={styles.regresar}>REGRESAR</div>
            </button>
          </button>
        </div>
        <div className={styles.configuracion}>Configuracion</div>
        <div className={styles.verPerfilItem} />
      </div>
      <b className={styles.estudiante}>ESTUDIANTE</b>
    </div>
  );
};

export default VerPerfil;
