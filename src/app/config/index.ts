// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({ path: path.join(process.cwd(), ".env") });

// export default {
//   // env: process.env.NODE_ENV,
//   // port: process.env.PORT,
//   jwt_access_secret: process.env.JWT_ACCESS_SECRET,
//   jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
//   bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
//   // super_admin_name: process.env.SUPER_ADMIN_NAME,
//   // super_admin_user_id: process.env.SUPER_ADMIN_USER_ID,
//   // super_admin_user_type: process.env.SUPER_ADMIN_USER_TYPE,
//   // super_admin_status: process.env.SUPER_ADMIN_STATUS,
//   // super_admin_email: process.env.SUPER_ADMIN_EMAIL,
//   // super_admin_phone: process.env.SUPER_ADMIN_PHONE,
//   // super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
//   // drive_client_email: process.env.DRIVE_CLIENT_EMAIL,
//   // drive_private_key: process.env.DRIVE_PRIVATE_KEY,
// };

import dotenv from "dotenv";
dotenv.config();

export default {
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
};

