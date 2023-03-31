import styles from "./CalificacionesEstudiante.module.css";

const CalificacionesEstudiante = () => {
  return (
    <div className={styles.calificacionesEstudiante}>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.headerItem} />
        <div className={styles.searchBar}>
          <div className={styles.searchBarChild} />
          <input
            className={styles.searchBarItem}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className={styles.tanggalanParent}>
          <div className={styles.tanggalan}>
            <div className={styles.tanggalanChild} />
            <div className={styles.marzo202023}>Marzo 20 2023 . 09:00 AM</div>
          </div>
          <img className={styles.groupChild} alt="" src="/group-341601.svg" />
        </div>
      </div>
      <img
        className={styles.calificacionesEstudianteChild}
        alt=""
        src="/rectangle-27853.svg"
      />
      <div className={styles.g1Parent}>
        <div className={styles.g1}>
          <div className={styles.calificacion}>Calificacion</div>
          <img className={styles.backgroundIcon} alt="" src="/background.svg" />
          <p className={styles.ins32602}>INS326 - 02</p>
          <div className={styles.estructuraDeDatos}>ESTRUCTURA DE DATOS</div>
          <b className={styles.a}>A</b>
          <div className={styles.puntos}>Puntos</div>
          <b className={styles.b}>16</b>
          <div className={styles.notaFinal}>Nota final</div>
          <b className={styles.b1}>40</b>
          <div className={styles.creditos}>Creditos</div>
          <b className={styles.b2}>4</b>
          <div className={styles.medioTermino}>Medio termino</div>
          <b className={styles.b3}>90</b>
        </div>
        <div className={styles.g2}>
          <div className={styles.calificacion1}>Calificacion</div>
          <b className={styles.i}>A</b>
          <b className={styles.b4}>16</b>
          <div className={styles.notaFinal1}>Nota final</div>
          <b className={styles.b5}>40</b>
          <b className={styles.b6}>4</b>
          <b className={styles.b7}>90</b>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/background1.svg"
          />
          <p className={styles.ins32601}>{`INS326 - 01 `}</p>
          <div className={styles.laboratorioDeEstructura}>
            ESTRUCTURA DE DATOS Y ALGORITMOS I
          </div>
          <div className={styles.puntos1}>Puntos</div>
          <div className={styles.creditos1}>Creditos</div>
          <div className={styles.medioTermino1}>Medio termino</div>
        </div>
        <div className={styles.g4}>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/background2.svg"
          />
          <p className={styles.ins32601}>{`INS326L - 01 `}</p>
          <div className={styles.laboratorioDeEstructura}>
            LABORATORIO DE ESTRUCTURA DE DATOS Y ALGORITMOS I
          </div>
          <div className={styles.calificacion1}>Calificacion</div>
          <b className={styles.i}>I</b>
          <div className={styles.puntos1}>Puntos</div>
          <b className={styles.b4}>00</b>
          <div className={styles.notaFinal1}>Nota final</div>
          <b className={styles.b5}>40</b>
          <div className={styles.creditos1}>Creditos</div>
          <b className={styles.b6}>4</b>
          <b className={styles.b7}>00</b>
          <div className={styles.medioTermino1}>Medio termino</div>
        </div>
        <div className={styles.g3}>
          <img
            className={styles.backgroundIcon1}
            alt=""
            src="/background3.svg"
          />
          <p className={styles.ins32601}>{`INS326L - 01 `}</p>
          <div className={styles.laboratorioDeEstructura}>
            LABORATORIO DE ESTRUCTURA DE DATOS Y ALGORITMOS I
          </div>
          <div className={styles.calificacion1}>Calificacion</div>
          <b className={styles.i1}>I</b>
          <div className={styles.puntos1}>Puntos</div>
          <b className={styles.b4}>00</b>
          <div className={styles.notaFinal1}>Nota final</div>
          <b className={styles.b5}>40</b>
          <div className={styles.creditos1}>Creditos</div>
          <b className={styles.b6}>4</b>
          <b className={styles.b7}>00</b>
          <div className={styles.medioTermino1}>Medio termino</div>
        </div>
        <select className={styles.selectSimple} autoFocus />
        <div className={styles.trimestre3}>Trimestre 3</div>
        <button className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.eldownloadAltParent}>
            <img
              className={styles.eldownloadAltIcon}
              alt=""
              src="/eldownloadalt.svg"
            />
            <b className={styles.pdf}>PDF</b>
          </div>
        </button>
      </div>
      <b className={styles.calificaciones}>Calificaciones</b>
      <div className={styles.chartCardWithIcon} />
      <div className={styles.weather}>
        <div className={styles.rectangle} />
        <b className={styles.b16}>3.88</b>
        <div className={styles.sunny}>Indice Trimestral</div>
      </div>
      <div className={styles.weather1}>
        <div className={styles.rectangle} />
        <div className={styles.sunny1}>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.id}>{`ID: `}</span>
              <span>1102312</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.id}>{`Nombre: `}</span>
              <span>David Felix</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.estatus}>{`Estatus: `}</span>
            </span>
            <span className={styles.activo}>ACTIVO</span>
            <span>
              <span className={styles.span}>{` `}</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.estatus}>Creditos aprobados:</span>
              <span> 108</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span className={styles.estatus}>Creditos programa:</span>
              <span className={styles.span1}> 279</span>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.weather2}>
        <div className={styles.rectangle} />
        <b className={styles.b16}>3.94</b>
        <div className={styles.sunny2}>Índice Acumulado</div>
      </div>
      <div className={styles.menuPrincipal}>
        <img
          className={styles.menuPrincipalChild}
          alt=""
          src="/rectangle-2769.svg"
        />
        <button className={styles.menuPrincipalItem} />
        <div className={styles.groupParent}>
          <div className={styles.iconoirheadsetHelpParent}>
            <img
              className={styles.iconoirheadsetHelp}
              alt=""
              src="/iconoirheadsethelp2.svg"
            />
            <b className={styles.help}>Help</b>
          </div>
          <div className={styles.signOutParent}>
            <b className={styles.signOut}>Sign Out</b>
            <img
              className={styles.vuesaxlinearlogoutIcon}
              alt=""
              src="/vuesaxlinearlogout2.svg"
            />
          </div>
          <div className={styles.menuPrincipal1}>MENU PRINCIPAL</div>
          <div className={styles.support}>SUPPORT</div>
          <div className={styles.groupInner} />
        </div>
        <div className={styles.vuesaxlineardocumentTextParent}>
          <img
            className={styles.vuesaxlinearlogoutIcon}
            alt=""
            src="/group-341761.svg"
          />
          <b className={styles.materias}>Materias</b>
        </div>
        <div className={styles.seleccionParent}>
          <b className={styles.seleccion}>{`Seleccion `}</b>
          <img
            className={styles.vuesaxlinearuserCirlceAddIcon}
            alt=""
            src="/vuesaxlinearusercirlceadd3.svg"
          />
        </div>
        <div className={styles.ellipseParent}>
          <img className={styles.ellipseIcon} alt="" />
          <div className={styles.davidFelixParent}>
            <h2 className={styles.davidFelix}>David Felix</h2>
            <div className={styles.estudiante}>Estudiante</div>
          </div>
        </div>
        <h1 className={styles.estudiante1}>ESTUDIANTE</h1>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangleDiv} />
          <h1 className={styles.calificaciones1}>Calificaciones</h1>
          <img
            className={styles.vuesaxlineartaskSquareIcon}
            alt=""
            src="/vuesaxlineartasksquare1.svg"
          />
        </div>
        <div className={styles.dashboardParent}>
          <b className={styles.dashboard}>Dashboard</b>
          <img
            className={styles.vuesaxlinearhome2Icon}
            alt=""
            src="/vuesaxlinearhome21.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CalificacionesEstudiante;
