import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import Navbar from "./Navbar";
import { IoIosSearch } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    getAllUser();
    
    // sortUserData();
  }, []);

  const serverURL = "https://converge-api.onrender.com";
  const localURL = "http://localhost:8080";
  const URL = serverURL;

  const compareName = (a, b) => {
    if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
    if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
    return 0;
  };

  const getAllUser = () => {
    fetch(`${URL}/getAllUsers`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setData(data.sort(compareName));
      });
  };

  const deleteUser = (id, username) => {
    if (window.confirm(`Are you sure you want to delete ${username}`)) {
      fetch(`${URL}/deleteUser`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          getAllUser();
        });
    } else {
    }
  };

  const incPoints = (id, username, points) => {
    // alert("points increased +10")
    if (
      window.confirm(
        `Are you sure you want to increase ${username}'s points by 10`
      )
    ) {
      fetch(`${URL}/increase10/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };

  const incPoints20 = (id, username, points) => {
    // alert("points increased +10")
    if (
      window.confirm(
        `Are you sure you want to increase ${username}'s points by 20`
      )
    ) {
      fetch(`${URL}/increase20/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };

  const incPoints50 = (id, username, points) => {
    // alert("points increased +10")
    if (
      window.confirm(
        `Are you sure you want to increase ${username}'s points by 50`
      )
    ) {
      fetch(`${URL}/increase50/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };


  const decPoints = (id, username, points) => {
    // alert("points decreased -10")
    if (
      window.confirm(
        `Are you sure you want to decrease ${username}'s points by 10`
      )
    ) {
      fetch(`${URL}/decrease10/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };

  const decPoints20 = (id, username, points) => {
    // alert("points decreased -10")
    if (
      window.confirm(
        `Are you sure you want to decrease ${username}'s points by 20`
      )
    ) {
      fetch(`${URL}/decrease20/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };

  const decPoints50 = (id, username, points) => {
    // alert("points decreased -10")
    if (
      window.confirm(
        `Are you sure you want to decrease ${username}'s points by 50`
      )
    ) {
      fetch(`${URL}/decrease50/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };

  const decPoints15 = (id, username, points) => {
    // alert("points decreased -10")
    if (
      window.confirm(
        `Are you sure you want to decrease ${username}'s points by 15`
      )
    ) {
      fetch(`${URL}/decrease15/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };

  const incPoints15 = (id, username, points) => {
    // alert("points decreased -10")
    if (
      window.confirm(
        `Are you sure you want to increase ${username}'s points by 15`
      )
    ) {
      fetch(`${URL}/increase15/${id}`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userid: id,
          points: points,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          getAllUser();
        });
    } else {
    }
  };

  const fetchData = (value) => {
    fetch(`${URL}/getAllUsers`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.fullname &&
            user.fullname.toLowerCase().includes(value)
          );
        });
        if(value === '')
         setData(data);
        else
          setData(results);
        
      });
  };

  

  // var sorteddata = data?.sort() || "";
  return (
    <>
      <Navbar />

      <div className="mt-[70px] admin-container">

      <div className="flex flex-col items-center justify-center">
        <h1 className="h1 text-center font-bold">Admin Panel</h1>
        
        <div className="text-center text-lg my-8">
          No. of Participants: {data.length}
        </div>

        
        </div>

        {data?.map((i, index) => {
          return (
            <div key={index}>
              <div className="admin-stats">
                <div className="username-col">
                  <p className="h3 short">
                    {index + 1}. {i.fullname}
                  </p>
                  <p>{i.username}</p>
                </div>
                <div className="tid-col">
                  <p className="h3 short">{i.tid}</p>
                  <p>{i.email}</p>
                  <p>{i.mobile}</p>
                </div>
                <div>
                  <p className="h1 short">
                    <span className="mobile">Points: </span>
                    {i.points ? i.points : "0"}
                  </p>
                </div>
                <div>
                  <div className="mb-1">
                    {/* <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        deleteUser(i._id, i.username);
                      }}
                    >
                      delete
                    </button> */}

                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        incPoints20(i._id, i.username, i.points);
                      }}
                    >
                      +20
                    </button>

                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        decPoints20(i._id, i.username, i.points);
                      }}
                    >
                      -20
                    </button>

                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        decPoints(i._id, i.username, i.points);
                      }}
                    >
                      -10
                    </button>

                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        incPoints(i._id, i.username, i.points);
                      }}
                    >
                      +10
                    </button>
                  </div>
                  <div className="mt-1">
                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        decPoints50(i._id, i.username, i.points);
                      }}
                    >
                      -50
                    </button>

                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        incPoints50(i._id, i.username, i.points);
                      }}
                    >
                      +50
                    </button>

                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        decPoints15(i._id, i.username, i.points);
                      }}
                    >
                      -15
                    </button>

                    <button
                      className={styles.greenButton + " btn mx-2"}
                      onClick={() => {
                        incPoints15(i._id, i.username, i.points);
                      }}
                    >
                      +15
                    </button>

                  </div>
                </div>
              </div>
              <div className="extra-stats" id={"user" + index}>
                <h4>User {index + 1}</h4>
                <p className="ml-2">
                  fname: {i.firstName} <br />
                  lname: {i.lastName} <br />
                  institute: {i.institute} <br />
                  Date: {i.time} <br />
                  Size: {i.size ? i.size : ""} <br />
                  Referred By: {i.referredby ? i.referredby : ""} <br />
                </p>

                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Admin;
