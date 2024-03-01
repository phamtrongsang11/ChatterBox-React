/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\tmutation CreateProfile($input: CreateProfileDto!) {\n\t\tcreateProfile(input: $input) {\n\t\t\tid\n\t\t\timageUrl\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n": types.CreateProfileDocument,
    "\n\tmutation CreateChannel($input: CreateChannelOnServerDto!) {\n\t\tcreateChannel(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.CreateChannelDocument,
    "\n\tmutation CreateServer($input: CreateServerDto!, $file: Upload) {\n\t\tcreateServer(input: $input, file: $file) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n": types.CreateServerDocument,
    "\n\tmutation DeleteChannel($channelId: Float) {\n\t\tdeleteChannelFromServer(channelId: $channelId)\n\t}\n": types.DeleteChannelDocument,
    "\n\tmutation DeleteServer($serverId: Float) {\n\t\tdeleteServer(serverId: $serverId)\n\t}\n": types.DeleteServerDocument,
    "\n\tmutation LeaveServer($serverId: Float) {\n\t\tleaveServer(serverId: $serverId)\n\t}\n": types.LeaveServerDocument,
    "\n\tmutation UpdateServer($input: UpdateServerDto!, $file: Upload) {\n\t\tupdateServer(input: $input, file: $file) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t}\n\t}\n": types.UpdateServerDocument,
    "\n\tmutation UpdateServerWithNewInviteCode($serverId: Float) {\n\t\tupdateServerWithNewInviteCode(serverId: $serverId) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tinviteCode\n\t\t}\n\t}\n": types.UpdateServerWithNewInviteCodeDocument,
    "\n\tmutation GetOrCreateConversation($memberOneId: Float, $memberTwoId: Float) {\n\t\tgetOrCreateConversation(\n\t\t\tmemberOneId: $memberOneId\n\t\t\tmemberTwoId: $memberTwoId\n\t\t) {\n\t\t\tid\n\t\t\tmemberOneId\n\t\t\tmemberTwoId\n\t\t\tmemberOne {\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\timageUrl\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemberTwo {\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\timageUrl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetOrCreateConversationDocument,
    "\n\tmutation CreateAccessToken($identity: String, $chatId: String) {\n\t\tcreateAccessToken(identity: $identity, chatId: $chatId)\n\t}\n": types.CreateAccessTokenDocument,
    "\n\tmutation AddMember($inviteCode: String!) {\n\t\taddMemberToServer(inviteCode: $inviteCode) {\n\t\t\tid\n\t\t}\n\t}\n": types.AddMemberDocument,
    "\n\tmutation ChangeMemberRole($memberId: Float, $role: String!) {\n\t\tchangeMemberRole(memberId: $memberId, role: $role) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n": types.ChangeMemberRoleDocument,
    "\n\tmutation DeleteMember($memberId: Float) {\n\t\tdeleteMember(memberId: $memberId) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\tprofileId\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\timageUrl\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.DeleteMemberDocument,
    "\n\tmutation CreateMessage(\n\t\t$content: String\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t\t$file: Upload\n\t) {\n\t\tcreateMessage(\n\t\t\tcontent: $content\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t\tfile: $file\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.CreateMessageDocument,
    "\n\tmutation DeleteMessage(\n\t\t$messageId: Float!\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t) {\n\t\tdeleteMessage(\n\t\t\tmessageId: $messageId\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.DeleteMessageDocument,
    "\n\tmutation UpdateMessage(\n\t\t$messageId: Float!\n\t\t$serverId: Float!\n\t\t$content: String!\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t) {\n\t\tupdateMessage(\n\t\t\tmessageId: $messageId\n\t\t\tserverId: $serverId\n\t\t\tcontent: $content\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tdeleted\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tdeleted\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.UpdateMessageDocument,
    "\n\tquery GetCurrentMember($profileId: Float, $serverId: Float) {\n\t\tgetCurrentMember(profileId: $profileId, serverId: $serverId) {\n\t\t\tid\n\t\t\trole\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n": types.GetCurrentMemberDocument,
    "\n\tquery GetMember($memberId: Float, $serverId: Float) {\n\t\tgetMember(memberId: $memberId, serverId: $serverId) {\n\t\t\tid\n\t\t\trole\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\timageUrl\n\t\t\t\tservers {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tchannels {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\ttype\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetMemberDocument,
    "\n\tquery GetMessages($conversationId: Float, $channelId: Float) {\n\t\tgetMessages(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessages {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetMessagesDocument,
    "\n\tquery GetServer($id: Float!) {\n\t\tgetServer(id: $id) {\n\t\t\tid\n\t\t\tprofileId\n\t\t\tname\n\t\t\timageUrl\n\t\t\tinviteCode\n\t\t\tchannels {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tname\n\t\t\t}\n\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\tprofileId\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\timageUrl\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\timageUrl\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n": types.GetServerDocument,
    "\n\tquery GetServers {\n\t\tgetServers {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t}\n\t}\n": types.GetServersDocument,
    "\n\tsubscription MessageCreated($conversationId: Float, $channelId: Float) {\n\t\tmessageCreated(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.MessageCreatedDocument,
    "\n\tsubscription MessageDeleted($conversationId: Float, $channelId: Float) {\n\t\tmessageDeleted(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tconversationId\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.MessageDeletedDocument,
    "\n\tsubscription MessageUpdated($conversationId: Float, $channelId: Float) {\n\t\tmessageUpdated(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tdeleted\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tdeleted\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.MessageUpdatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateProfile($input: CreateProfileDto!) {\n\t\tcreateProfile(input: $input) {\n\t\t\tid\n\t\t\timageUrl\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateProfile($input: CreateProfileDto!) {\n\t\tcreateProfile(input: $input) {\n\t\t\tid\n\t\t\timageUrl\n\t\t\tname\n\t\t\temail\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateChannel($input: CreateChannelOnServerDto!) {\n\t\tcreateChannel(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateChannel($input: CreateChannelOnServerDto!) {\n\t\tcreateChannel(input: $input) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateServer($input: CreateServerDto!, $file: Upload) {\n\t\tcreateServer(input: $input, file: $file) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateServer($input: CreateServerDto!, $file: Upload) {\n\t\tcreateServer(input: $input, file: $file) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteChannel($channelId: Float) {\n\t\tdeleteChannelFromServer(channelId: $channelId)\n\t}\n"): (typeof documents)["\n\tmutation DeleteChannel($channelId: Float) {\n\t\tdeleteChannelFromServer(channelId: $channelId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteServer($serverId: Float) {\n\t\tdeleteServer(serverId: $serverId)\n\t}\n"): (typeof documents)["\n\tmutation DeleteServer($serverId: Float) {\n\t\tdeleteServer(serverId: $serverId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation LeaveServer($serverId: Float) {\n\t\tleaveServer(serverId: $serverId)\n\t}\n"): (typeof documents)["\n\tmutation LeaveServer($serverId: Float) {\n\t\tleaveServer(serverId: $serverId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateServer($input: UpdateServerDto!, $file: Upload) {\n\t\tupdateServer(input: $input, file: $file) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateServer($input: UpdateServerDto!, $file: Upload) {\n\t\tupdateServer(input: $input, file: $file) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateServerWithNewInviteCode($serverId: Float) {\n\t\tupdateServerWithNewInviteCode(serverId: $serverId) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tinviteCode\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateServerWithNewInviteCode($serverId: Float) {\n\t\tupdateServerWithNewInviteCode(serverId: $serverId) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tinviteCode\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation GetOrCreateConversation($memberOneId: Float, $memberTwoId: Float) {\n\t\tgetOrCreateConversation(\n\t\t\tmemberOneId: $memberOneId\n\t\t\tmemberTwoId: $memberTwoId\n\t\t) {\n\t\t\tid\n\t\t\tmemberOneId\n\t\t\tmemberTwoId\n\t\t\tmemberOne {\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\timageUrl\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemberTwo {\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\timageUrl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation GetOrCreateConversation($memberOneId: Float, $memberTwoId: Float) {\n\t\tgetOrCreateConversation(\n\t\t\tmemberOneId: $memberOneId\n\t\t\tmemberTwoId: $memberTwoId\n\t\t) {\n\t\t\tid\n\t\t\tmemberOneId\n\t\t\tmemberTwoId\n\t\t\tmemberOne {\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\timageUrl\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemberTwo {\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\temail\n\t\t\t\t\timageUrl\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateAccessToken($identity: String, $chatId: String) {\n\t\tcreateAccessToken(identity: $identity, chatId: $chatId)\n\t}\n"): (typeof documents)["\n\tmutation CreateAccessToken($identity: String, $chatId: String) {\n\t\tcreateAccessToken(identity: $identity, chatId: $chatId)\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation AddMember($inviteCode: String!) {\n\t\taddMemberToServer(inviteCode: $inviteCode) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation AddMember($inviteCode: String!) {\n\t\taddMemberToServer(inviteCode: $inviteCode) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation ChangeMemberRole($memberId: Float, $role: String!) {\n\t\tchangeMemberRole(memberId: $memberId, role: $role) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation ChangeMemberRole($memberId: Float, $role: String!) {\n\t\tchangeMemberRole(memberId: $memberId, role: $role) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteMember($memberId: Float) {\n\t\tdeleteMember(memberId: $memberId) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\tprofileId\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\timageUrl\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation DeleteMember($memberId: Float) {\n\t\tdeleteMember(memberId: $memberId) {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\tprofileId\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\timageUrl\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateMessage(\n\t\t$content: String\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t\t$file: Upload\n\t) {\n\t\tcreateMessage(\n\t\t\tcontent: $content\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t\tfile: $file\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateMessage(\n\t\t$content: String\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t\t$file: Upload\n\t) {\n\t\tcreateMessage(\n\t\t\tcontent: $content\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t\tfile: $file\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation DeleteMessage(\n\t\t$messageId: Float!\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t) {\n\t\tdeleteMessage(\n\t\t\tmessageId: $messageId\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation DeleteMessage(\n\t\t$messageId: Float!\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t) {\n\t\tdeleteMessage(\n\t\t\tmessageId: $messageId\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation UpdateMessage(\n\t\t$messageId: Float!\n\t\t$serverId: Float!\n\t\t$content: String!\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t) {\n\t\tupdateMessage(\n\t\t\tmessageId: $messageId\n\t\t\tserverId: $serverId\n\t\t\tcontent: $content\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tdeleted\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tdeleted\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tmutation UpdateMessage(\n\t\t$messageId: Float!\n\t\t$serverId: Float!\n\t\t$content: String!\n\t\t$conversationId: Float\n\t\t$channelId: Float\n\t) {\n\t\tupdateMessage(\n\t\t\tmessageId: $messageId\n\t\t\tserverId: $serverId\n\t\t\tcontent: $content\n\t\t\tconversationId: $conversationId\n\t\t\tchannelId: $channelId\n\t\t) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tdeleted\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tdeleted\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetCurrentMember($profileId: Float, $serverId: Float) {\n\t\tgetCurrentMember(profileId: $profileId, serverId: $serverId) {\n\t\t\tid\n\t\t\trole\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCurrentMember($profileId: Float, $serverId: Float) {\n\t\tgetCurrentMember(profileId: $profileId, serverId: $serverId) {\n\t\t\tid\n\t\t\trole\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetMember($memberId: Float, $serverId: Float) {\n\t\tgetMember(memberId: $memberId, serverId: $serverId) {\n\t\t\tid\n\t\t\trole\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\timageUrl\n\t\t\t\tservers {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tchannels {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\ttype\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetMember($memberId: Float, $serverId: Float) {\n\t\tgetMember(memberId: $memberId, serverId: $serverId) {\n\t\t\tid\n\t\t\trole\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\temail\n\t\t\t\timageUrl\n\t\t\t\tservers {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tchannels {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\ttype\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetMessages($conversationId: Float, $channelId: Float) {\n\t\tgetMessages(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessages {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetMessages($conversationId: Float, $channelId: Float) {\n\t\tgetMessages(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessages {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetServer($id: Float!) {\n\t\tgetServer(id: $id) {\n\t\t\tid\n\t\t\tprofileId\n\t\t\tname\n\t\t\timageUrl\n\t\t\tinviteCode\n\t\t\tchannels {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tname\n\t\t\t}\n\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\tprofileId\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\timageUrl\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\timageUrl\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetServer($id: Float!) {\n\t\tgetServer(id: $id) {\n\t\t\tid\n\t\t\tprofileId\n\t\t\tname\n\t\t\timageUrl\n\t\t\tinviteCode\n\t\t\tchannels {\n\t\t\t\tid\n\t\t\t\ttype\n\t\t\t\tname\n\t\t\t}\n\n\t\t\tmembers {\n\t\t\t\tid\n\t\t\t\trole\n\t\t\t\tprofileId\n\t\t\t\tprofile {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\timageUrl\n\t\t\t\t\temail\n\t\t\t\t}\n\t\t\t}\n\t\t\tprofile {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\timageUrl\n\t\t\t\temail\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetServers {\n\t\tgetServers {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetServers {\n\t\tgetServers {\n\t\t\tid\n\t\t\tname\n\t\t\timageUrl\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tsubscription MessageCreated($conversationId: Float, $channelId: Float) {\n\t\tmessageCreated(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tsubscription MessageCreated($conversationId: Float, $channelId: Float) {\n\t\tmessageCreated(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tsubscription MessageDeleted($conversationId: Float, $channelId: Float) {\n\t\tmessageDeleted(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tconversationId\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tsubscription MessageDeleted($conversationId: Float, $channelId: Float) {\n\t\tmessageDeleted(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tconversationId\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tdeleted\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tsubscription MessageUpdated($conversationId: Float, $channelId: Float) {\n\t\tmessageUpdated(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tdeleted\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tdeleted\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tsubscription MessageUpdated($conversationId: Float, $channelId: Float) {\n\t\tmessageUpdated(conversationId: $conversationId, channelId: $channelId) {\n\t\t\tmessage {\n\t\t\t\t... on DirectMessage {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tconversationId\n\t\t\t\t\tfileUrl\n\t\t\t\t\tdeleted\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t... on Message {\n\t\t\t\t\tid\n\t\t\t\t\tcontent\n\t\t\t\t\tcreatedAt\n\t\t\t\t\tupdatedAt\n\t\t\t\t\tfileUrl\n\t\t\t\t\tdeleted\n\t\t\t\t\tchannel {\n\t\t\t\t\t\tid\n\t\t\t\t\t}\n\t\t\t\t\tmember {\n\t\t\t\t\t\trole\n\t\t\t\t\t\tid\n\t\t\t\t\t\tprofileId\n\t\t\t\t\t\tprofile {\n\t\t\t\t\t\t\temail\n\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\timageUrl\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;