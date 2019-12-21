create table guild (
  guild_id integer not null,
  name text not null,
  default_voice_provider_id integer null,
  command_prefix text default('!'),
  title text not null default('master'),
  default_language text default('en-US'),
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_guild primary key(guild_id),
);
