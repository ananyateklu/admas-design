CREATE TABLE "portfolio_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title_en" text NOT NULL,
	"title_am" text NOT NULL,
	"description_en" text,
	"description_am" text,
	"category" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "testimonials" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"portfolio_item_id" uuid NOT NULL,
	"client_name" text,
	"text_en" text,
	"text_am" text,
	"rating" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_portfolio_item_id_portfolio_items_id_fk" FOREIGN KEY ("portfolio_item_id") REFERENCES "public"."portfolio_items"("id") ON DELETE cascade ON UPDATE no action;