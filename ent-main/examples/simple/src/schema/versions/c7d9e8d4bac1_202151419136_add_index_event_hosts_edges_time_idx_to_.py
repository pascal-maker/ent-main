# Code generated by github.com/lolopinto/ent/ent, DO NOT edit.

"""add index event_hosts_edges_time_idx to event_hosts_edges
add index event_rsvps_edges_time_idx to event_rsvps_edges
add index user_created_events_edges_time_idx to user_created_events_edges
add index user_friends_edges_time_idx to user_friends_edges
add index user_self_contact_edges_time_idx to user_self_contact_edges

Revision ID: c7d9e8d4bac1
Revises: 67329918cbb1
Create Date: 2021-05-14 19:13:06.713867+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql


# revision identifiers, used by Alembic.
revision = 'c7d9e8d4bac1'
down_revision = '67329918cbb1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index('event_hosts_edges_time_idx',
                    'event_hosts_edges', ['time'], unique=False)
    op.create_index('event_rsvps_edges_time_idx',
                    'event_rsvps_edges', ['time'], unique=False)
    op.create_index('user_created_events_edges_time_idx',
                    'user_created_events_edges', ['time'], unique=False)
    op.create_index('user_friends_edges_time_idx',
                    'user_friends_edges', ['time'], unique=False)
    op.create_index('user_self_contact_edges_time_idx',
                    'user_self_contact_edges', ['time'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('user_self_contact_edges_time_idx',
                  table_name='user_self_contact_edges')
    op.drop_index('user_friends_edges_time_idx',
                  table_name='user_friends_edges')
    op.drop_index('user_created_events_edges_time_idx',
                  table_name='user_created_events_edges')
    op.drop_index('event_rsvps_edges_time_idx', table_name='event_rsvps_edges')
    op.drop_index('event_hosts_edges_time_idx', table_name='event_hosts_edges')
    # ### end Alembic commands ###
