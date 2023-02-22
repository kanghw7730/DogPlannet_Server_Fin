const dogDao = require('./models/doginfos');


// 개정보 저장하기
function saveDog(dogInfo) {
    return dogDao.saveDog(dogInfo);
  }

module.exports = {
    saveDog,
} ;

/*강아지 기록 가공하기.
exports.getDogRecords = (date, userId) =>{
    return dogrecords.findAll({
        where:{
            date,
            user_id:userId,
        },
        attributes: ['weight','poop_type','walk_time', 'walk_distance']
    });
};
*/