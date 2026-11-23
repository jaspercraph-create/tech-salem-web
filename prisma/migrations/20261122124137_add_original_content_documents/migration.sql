-- CreateTable
CREATE TABLE "original_content_documents" (
    "locale" "Locale" NOT NULL,
    "key" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "original_content_documents_pkey" PRIMARY KEY ("locale","key")
);
