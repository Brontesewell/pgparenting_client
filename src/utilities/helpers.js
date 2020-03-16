export function createCoursesForSubCatagory(subcatagoryobj, babyHash){
    const newSubCatagory = {
        sub_id: subcatagoryobj.id,
        sub_title: subcatagoryobj.title,
        courses: babyHash.courses.filter(course => course.sub_catagory_id === subcatagoryobj.id)
    }
    return newSubCatagory;
}

export function createBabyHash(babyHash) {
    const newBabyHash = {
      baby_id: babyHash.id,
      image_url: babyHash.image,
      catagory: {
        catagory_name: babyHash.catagory_name,
        catagory_title: babyHash.catagory_title,
        sub_catagories: babyHash.sub_catagories.map(c => createCoursesForSubCatagory(c, babyHash))
      }
    };
    return newBabyHash
}
