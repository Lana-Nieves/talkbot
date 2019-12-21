CREATE TABLE guild
(
    guild_id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    default_voice_provider text COLLATE pg_catalog."default" DEFAULT 'amazon'::text,
    command_prefix text COLLATE pg_catalog."default" DEFAULT '!'::text,
    title text COLLATE pg_catalog."default" NOT NULL DEFAULT 'master'::text,
    default_language text COLLATE pg_catalog."default" DEFAULT 'en-US'::text,
    updated timestamp with time zone NOT NULL,
    created timestamp with time zone NOT NULL,
    CONSTRAINT "PK_guild" PRIMARY KEY (guild_id)
)
