-- DropForeignKey
ALTER TABLE "public"."attendance" DROP CONSTRAINT "attendance_class_student_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."class" DROP CONSTRAINT "class_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."class" DROP CONSTRAINT "class_syllabus_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."class" DROP CONSTRAINT "class_type_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."class_student" DROP CONSTRAINT "class_student_class_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."class_student" DROP CONSTRAINT "class_student_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."class_teacher" DROP CONSTRAINT "class_teacher_class_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."class_teacher" DROP CONSTRAINT "class_teacher_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."module" DROP CONSTRAINT "module_syllabus_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."session" DROP CONSTRAINT "session_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."topic" DROP CONSTRAINT "topic_module_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."topic_resource" DROP CONSTRAINT "topic_resource_resource_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."topic_resource" DROP CONSTRAINT "topic_resource_topic_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."user" DROP CONSTRAINT "user_company_id_fkey";

-- AlterTable
ALTER TABLE "public"."user" ALTER COLUMN "is_email_verified" SET DEFAULT false;

-- CreateTable
CREATE TABLE "public"."activate_token" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "activatedAt" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "activate_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."refresh_token" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "jti" TEXT NOT NULL,
    "family_id" TEXT NOT NULL,
    "hashed_token" TEXT NOT NULL,
    "user_agent" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "revoked_at" TIMESTAMP(3),
    "replaced_by_id" TEXT,

    CONSTRAINT "refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "activate_token_token_key" ON "public"."activate_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_jti_key" ON "public"."refresh_token"("jti");

-- CreateIndex
CREATE INDEX "refresh_token_user_id_idx" ON "public"."refresh_token"("user_id");

-- CreateIndex
CREATE INDEX "refresh_token_family_id_idx" ON "public"."refresh_token"("family_id");

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_syllabus_id_fkey" FOREIGN KEY ("syllabus_id") REFERENCES "public"."syllabus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class" ADD CONSTRAINT "class_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "public"."class_type"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user" ADD CONSTRAINT "user_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."activate_token" ADD CONSTRAINT "activate_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."module" ADD CONSTRAINT "module_syllabus_id_fkey" FOREIGN KEY ("syllabus_id") REFERENCES "public"."syllabus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."topic" ADD CONSTRAINT "topic_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "public"."module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."topic_resource" ADD CONSTRAINT "topic_resource_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."topic_resource" ADD CONSTRAINT "topic_resource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "public"."resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."session" ADD CONSTRAINT "session_topic_id_fkey" FOREIGN KEY ("topic_id") REFERENCES "public"."topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_student" ADD CONSTRAINT "class_student_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_student" ADD CONSTRAINT "class_student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_teacher" ADD CONSTRAINT "class_teacher_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."class_teacher" ADD CONSTRAINT "class_teacher_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "public"."class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendance" ADD CONSTRAINT "attendance_class_student_id_fkey" FOREIGN KEY ("class_student_id") REFERENCES "public"."class_student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."refresh_token" ADD CONSTRAINT "refresh_token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
