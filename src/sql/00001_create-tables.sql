create table voice_provider(
  voice_provider_id serial not null,
  name text not null,
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_voice_provider primary key(voice_provider_id)
);
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
  constraint FK_guild_voice_provider foreign key(default_voice_provider_id) references voice_provider(voice_provider_id)
);
create table member (
  member_id integer not null,
  guild_id integer not null,
  user_id integer not null,
  title text not null default('master'),
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_member primary key(guild_id, user_id),
  constraint FK_member_guild foreign key(guild_id) references guild(guild_id)
);
create table voice (
  voice_id serial not null,
  voice_provider_id integer not null,
  alias text null,
  name text not null,
  gender text null,
  translate_to text null,
  lang_code text not null,
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_voice primary key(voice_id),
  constraint FK_voice_voice_provider foreign key(voice_provider_id) references voice_provider(voice_provider_id)
);
create table voice_profile (
  voice_profile_id serial not null,
  name text not null,
  owner_user_id integer null, -- null is global
  voice_id integer null,
  pitch integer null,
  speed double precision null,
  gender text null,
  lang text null,
  prefix text null,
  suffix text null,
  translate_to text null,
  announceme boolean not null default(false),
  puberty boolean not null default(false),
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_voice_profile primary key(voice_profile_id),
  constraint FK_voice_profile_voice foreign key(voice_id) references voice(voice_id)
);
create table member_voice_profile (
  member_voice_profile_id serial not null,
  voice_profile_id integer not null,
  member_id integer not null,
  is_default boolean not null default(true),
  is_active boolean not null default(false),
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_member_voice_profile primary key (member_voice_profile_id),
  constraint FK_member_voice_profile_voice_profile foreign key (voice_profile_id) references voice_profile(voice_profile_id)
);
create table text_rule_group (
  text_rule_group_id serial not null,
  guild_id integer not null,
  name text,
  is_default boolean default(false),
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_text_rule_group primary key(text_rule_group_id)
);
create table text_rule (
  text_rule_id serial not null,
  text_rule_group_id integer not null,
  rule_type text not null, -- text, regex, sfx etc.
  search_pattern text not null,
  replace_pattern text not null,
  updated timestamp with time zone not null,
  created timestamp with time zone not null,
  constraint PK_text_rule primary key(text_rule_id),
  constraint FK_text_rule_text_rule_group foreign key(text_rule_group_id) references text_rule_group(text_rule_group_id)
);
