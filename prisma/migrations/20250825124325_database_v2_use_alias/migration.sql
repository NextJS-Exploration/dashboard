/*
  Warnings:

  - You are about to drop the `Attendance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClassStudent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClassTeacher` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClassType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Module` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Syllabus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TopicResource` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Attendance" DROP CONSTRAINT "Attendance_class_student_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_syllabus_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Class" DROP CONSTRAINT "Class_type_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ClassStudent" DROP CONSTRAINT "ClassStudent_class_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ClassStudent" DROP CONSTRAINT "ClassStudent_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ClassTeacher" DROP CONSTRAINT "ClassTeacher_class_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."ClassTeacher" DROP CONSTRAINT "ClassTeacher_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Module" DROP CONSTRAINT "Module_syllabus_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Session" DROP CONSTRAINT "Session_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Topic" DROP CONSTRAINT "Topic_module_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."TopicResource" DROP CONSTRAINT "TopicResource_resource_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."TopicResource" DROP CONSTRAINT "TopicResource_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_company_id_fkey";

-- DropTable
DROP TABLE "public"."Attendance";

-- DropTable
DROP TABLE "public"."Class";

-- DropTable
DROP TABLE "public"."ClassStudent";

-- DropTable
DROP TABLE "public"."ClassTeacher";

-- DropTable
DROP TABLE "public"."ClassType";

-- DropTable
DROP TABLE "public"."Company";

-- DropTable
DROP TABLE "public"."Module";

-- DropTable
DROP TABLE "public"."Resource";

-- DropTable
DROP TABLE "public"."Session";

-- DropTable
DROP TABLE "public"."Syllabus";

-- DropTable
DROP TABLE "public"."Topic";

-- DropTable
DROP TABLE "public"."TopicResource";

-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."class" (
    "id" TEXT NOT NULL,
    "syllabus_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "company_id" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo" TEXT,
    "gender" "public"."Gender" NOT NULL,
    "address" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL,
    "is_email_verified" BOOLEAN NOT NULL DEFAULT true,
    "is_phone_verified" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."syllabus" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "syllabus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."module" (
    "id" TEXT NOT NULL,
    "syllabus_id" TEXT NOT NULL,
    "position" DOUBLE PRECISION NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "module_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."topic" (
    "id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "position" DOUBLE PRECISION NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "goal" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."resource" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."topic_resource" (
    "id" TEXT NOT NULL,
    "topic_id" TEXT NOT NULL,
    "resource_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "topic_resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."session" (
    "id" TEXT NOT NULL,
    "topic_id" TEXT NOT NULL,
    "session_start" TIMESTAMP(3) NOT NULL,
    "session_end" TIMESTAMP(3) NOT NULL,
    "meeting_id" TEXT NOT NULL,
    "meeting_password" TEXT NOT NULL,
    "meeting_url" TEXT NOT NULL,
    "meeting_recording" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."class_student" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."class_teacher" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "website" TEXT,
    "logo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."class_type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "class_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attendance" (
    "id" TEXT NOT NULL,
    "class_student_id" TEXT NOT NULL,
    "description" "public"."AttendanceStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attendance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "class_syllabus_id_key" ON "public"."class"("syllabus_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "public"."user"("phone");

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_syllabus_id_fkey" FOREIGN KEY ("syllabus_id") REFERENCES "public"."syllabus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "public"."class_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."module" ADD CONSTRAINT "module_syllabus_id_fkey" FOREIGN KEY ("syllabus_id") REFERENCES "public"."syllabus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."topic" ADD CONSTRAINT "topic_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "public"."module"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."topic_resource" ADD CONSTRAINT "topic_resource_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."topic_resource" ADD CONSTRAINT "topic_resource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "public"."resource"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."session" ADD CONSTRAINT "session_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_student" ADD CONSTRAINT "class_student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_student" ADD CONSTRAINT "class_student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_teacher" ADD CONSTRAINT "class_teacher_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_teacher" ADD CONSTRAINT "class_teacher_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendance" ADD CONSTRAINT "attendance_class_student_id_fkey" FOREIGN KEY ("class_student_id") REFERENCES "public"."class_student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
