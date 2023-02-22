const { pool } = require("../config/database");

//개정보 저장하기
function saveDog(dogInfo) {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO dog_infos (dog_name, dog_sex, dog_type, dog_birthyear, user_id) VALUES (?, ?, ?, ?, ?)';
      const values = [dogInfo.dogName, dogInfo.dog_sex, dogInfo.dogType, dogInfo.dog_birthyear, dogInfo.userId];
  
      pool.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          const savedDogInfo = {
            id: results.insertId,
            dogName: dogInfo.dogName,
            sex: dogInfo.sex,
            dogType: dogInfo.dogType,
            birthYear: dogInfo.birthYear,
            userId: dogInfo.userId,
          };
          resolve(savedDogInfo);
        }
      });
    });
  }
  
  module.exports = {
    saveDog,
  };

module.exports = dogDao;
//개이름 대댓에 보내기


//개정보(개이름/나이[n살]/성별/견)를 개기록에 보내기